let videoId = 1;

const videos = [
    {
        id: 1,
        title: '데드풀',
        release: '2016',
        age: '19',
        runtime: '1시간 48분',
        characters: ['라이언 레이놀즈', '모레나 바카린', '에드 스크레인'],
        director: '팀 밀러',
        summary: '세상에 이런 히어로 하나쯤은 괜찮잖아? 비밀 실험에 참여한 후 특별한 능력을 갖게 된 주인공. 새끈한 빨간 슈트에 찰진 드립 장착한 "데드풀"로 거듭난다. 파워는 어마무시, 책임감은 개나 줘버려. 어디 한번 놀아보실까? 뮤직 큐.',
    },
];

// 영상 추가
exports.write = ctx => {
    const { title, release, age, runtime, characters, director, summary } = ctx.request.body;
    videoId += 1; // 기존 postId 값에 1을 더한다.
    const video = { id: videoId, title, release, age, runtime, characters, director, summary };
    videos.push(video);
    ctx.body = video;
};

// 영상 목록 조회
exports.list = ctx => {
    ctx.body = videos;
};

// 특정 영상 조회
exports.read = ctx => {
    const { id } = ctx.params;
    // id로 값을 찾는다.
    const video = videos.find(v => v.id.toString() === id);
    if (!video) {
        ctx.status = 404;
        ctx.body = {
            message: '포스트가 존재하지 않습니다.',
        };
        return;
    }
    ctx.body = video;
};

// 특정 포스트 제거
exports.remove = ctx => {
    const { id } = ctx.params;
    const index = videos.findIndex(v => v.id.toString() === id);
    if (index === -1) {
        ctx.status = 404;
        ctx.body = {
            message: '포스트가 존재하지 않습니다.',
        };
        return;
    }
    videos.splice(index, 1);
    ctx.status = 204;
}

// 포스트 수정
exports.replace = ctx => {
    const { id } = ctx.params;
    const index = videos.findIndex(v => v.id.toString() === id);
    if (index === -1) {
        ctx.status = 404;
        ctx.body = {
            message: '포스트가 존재하지 않습니다.',
        };
        return;
    }
    videos[index] = {
        id,
        ...ctx.request.body,
    };
    ctx.body = videos[index];
};

// 포스트 특정 필드
exports.update = ctx => {
    const { id } = ctx.params;
    const index = videos.findIndex(v => v.id.toString() === id);
    if (index === -1) {
        ctx.status = 404;
        ctx.body = {
            message: '포스트가 존재하지 않습니다.',
        };
        return;
    }
    videos[index] = {
        ...videos[index],
        ...ctx.request.body,
    };
    ctx.body = videos[index];
};