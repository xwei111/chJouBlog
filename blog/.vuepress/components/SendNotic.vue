<template>
  <div class="sendBtn" @click="sendHandle">发送消息</div>
</template>
<script>
export default {
  methods: {
    sendHandle() {
      const title = "施主，别走！！！";
      const options = {
        body: "施主你命犯桃花，老衲为你卜了一卦，点开看看吧",
        dir: "rtl",
        icon:
          "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1602504723214&di=b7527ceed00046c1a061f7952d038f7a&imgtype=0&src=http%3A%2F%2Fc-ssl.duitang.com%2Fuploads%2Fitem%2F202003%2F07%2F20200307221933_qjesz.thumb.400_0.jpeg"
      };

      // 判断浏览器是否支持
      if (!("Notification" in window)) {
        alert("浏览器不支持Notification");
      } else {
        // 用户权限状态
        let permission = Notification.permission;
        if (permission === "granted") {
          // 同意
          const n = new Notification(title, options);
          n.onclick = function() {
            window.open('https://chasejourney.top/divination/index.html', "_blank");
            n.close();
          };
        } else if (permission === "default") {
          // 请求权限
          Notification.requestPermission().then(res => {
            if (res === "granted") {
              // 同意
              const n = new Notification(title, options);
              n.onclick = function() {
                window.open('https://chasejourney.top/divination/index.html', "_blank");
                n.close();
              };
            }
          });
        } else {
          // 拒绝
          console.log("用户拒绝了");
        }
      }
    }
  }
};
</script>
<style scoped>
.sendBtn {
  width: 120px;
  height: 40px;
  background: #409eff;
  font-size: 14px;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
  cursor: pointer;
}
</style>