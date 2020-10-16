<template>
  <div>
    <div class="filter_shadow">
      <div class="filter_shadow_items">
        <img class="box_shadow" :src="require('./zan.png')" />
      </div>
      <div class="filter_shadow_items">
        <img class="drop_shadow" :src="require('./zan.png')" />
      </div>
    </div>

    <p>对于包含子元素的添加shadow亦不相同</p>

    <div class="filter_shadow">
        <div class="filter_shadow_box f_b_s">
            <img class="filter_shadow_box_ig" :src="require('./start.jpg')" />
            <div class="filter_shadow_box_content"></div>
        </div>
        <div class="filter_shadow_box f_d_s">
            <img class="filter_shadow_box_ig" :src="require('./start.jpg')" />
            <div class="filter_shadow_box_content"></div>
        </div>
    </div>
  </div>
</template>
<style scoped>
.filter_shadow {
  display: flex;
  padding-top: 10px;
}
.filter_shadow_items {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #f7f7f7;
  padding: 20px;
}
.box_shadow {
  box-shadow: 0px 0px 10px #f00;
  margin-bottom: 20px;
  border: none;
  margin: 0;
}
.drop_shadow {
  filter: drop-shadow(0px 0px 10px #f00);
  border: none;
  margin: 0;
}

.filter_shadow_box {
    width: calc(50% - 20px);
    height: 120px;
    position: relative;
    margin:0 10px;
}
.filter_shadow_box_ig {
    width: 120px;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 1;
}
.filter_shadow_box_content {
    position: absolute;
    height: 100px;
    width: 80%;
    background: #f7f7f7;
    bottom: 0;
    right: 0;
}
.f_b_s {
    box-shadow: 0px 0px 10px #f00;
}
.f_d_s {
    filter: drop-shadow(0px 0px 10px #f00);
}
</style>