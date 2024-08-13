const videoElement = document.getElementById('交互式视频');
const choiceButtons = document.querySelectorAll('.选择按钮');

// 定义视频路径
const 视频路径 = {
    1: '路径/到/video-option1.mp4',
    2：'路径/到/video-option2.mp4'
};

//初始视频路径
videoElement.src ='路径/到/video.mp4';

// 当视频播放结束时显示选择按钮
videoElement.addEventListener('结束', function() {
    choiceButtons.forEach(button => button.style.display = 'inline-block');
});

// 当视频开始播放时隐藏选择按钮
videoElement.addEventListener（'播放'，函数（）{
    choiceButtons.forEach(button => button.style.display = 'none');
});

// 用户选择路径时触发
函数选择路径（路径）{
    如果 (videoPaths[路径]) {
        videoElement.src = videoPaths[路径];
        视频元素.加载（）；
        视频主要.播放（）；
    } 别的 {
        alert('无效的选择！');
    }
}
