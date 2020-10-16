<template>
  <div>
    <div class="btn">button</div>
    这两个在网上看到的，还是很神奇的，第二个融合主要利用contrast和blur
    <p class="text">Color to see see</p>
    <div class="box">
        <div class="box1"></div>
        <div class="box2"></div>
    </div>
  </div>
</template>
<style scoped>
.btn {
  width: 300px;
  height: 100px;
  background: linear-gradient(to right, rgb(88, 236, 224), rgb(188, 231, 69));
  animation: hue 3s infinite linear;
  border-radius: 8px;
  color: #fff;
  font-size: 26px;
  text-align: center;
  line-height: 100px;
  margin-bottom: 30px;
}
.text {
    animation: blur 5s infinite alternate ease-in-out;
    color: #000;
    filter: blur(0);
    letter-spacing: -5px;
    filter: contrast(20);
    font-size: 24px;
    font-weight: 900;
    font-family: 'Courier New', Courier, monospace;
}
.box {
    position: relative;
    width: 300px;
    height: 200px;
    filter: contrast(20);
    background: #fff;
    z-index: 99;
}
.box1 {
    position: absolute;
    width: 120px;
    height: 120px;
    border-radius: 50%;
    background: #333;
    top: 40px;
    left: 40px;
    z-index: 2;
    filter: blur(6px);
    box-sizing: border-box;
    animation: filterBallMove 4s ease-out infinite;
}
.box2 {
    position: absolute;
    width: 80px;
    height: 80px;
    border-radius: 50%;
    background: #3F51B5;
    top: 60px;
    right: 40px;
    z-index: 2;
    filter: blur(6px);
    animation: filterBallMove2 4s ease-out infinite;
}
</style>