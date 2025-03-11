LottieInteractivity.create({
    player: '#lottie-scroll-lines',
    mode: 'scroll',
    actions: [
        {
            visibility: [0, 1],
            type: 'seek',
            frames: [90, 123],
        },
    ]
});

LottieInteractivity.create({
    player: '#lottie-sync-cursor-blueprint',
    mode: 'cursor',
    actions: [
        {
            position: { x: [0, 1], y: [0, 1] },
            type: "seek",
            frames: [0, 42]
        }
    ]
});