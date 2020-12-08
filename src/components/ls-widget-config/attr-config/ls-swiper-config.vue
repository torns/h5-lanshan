<template>
  <div class="ls-swiper-config">
    <div class="theme">
      <el-tooltip
        placement="top"
        v-for="item in themes"
        :key="item.theme"
        effect="light"
      >
        <div slot="content">
          <img :src="item.img" alt="" />
        </div>
        <i
          class="iconfont"
          :class="item.icon"
          @click="setTheme(item.theme)"
        ></i>
      </el-tooltip>
    </div>
    <el-form
      ref="form"
      :model="config"
      label-width="100px"
      label-position="left"
    >
      <el-form-item label="自动播放">
        <el-switch v-model="config.autoplay"> </el-switch>
      </el-form-item>
      <el-form-item label="是否循环">
        <el-switch v-model="config.loop"> </el-switch>
      </el-form-item>
      <el-form-item label="图片圆角">
        <el-switch v-model="config.imgRadius"> </el-switch>
      </el-form-item>
      <el-form-item label="图片是否居中">
        <el-switch v-model="config.center"> </el-switch>
      </el-form-item>
      <el-form-item label="皇冠">
        <el-switch v-model="config.crown"> </el-switch>
      </el-form-item>
      <el-form-item label="轮播点">
        <el-switch v-model="config.pagination"> </el-switch>
      </el-form-item>
      <el-form-item label="图片宽度(%)">
        <el-slider v-model="config.imgWidth" :min="1" :max="100"></el-slider>
      </el-form-item>
      <el-form-item label="图片高度">
        <el-slider v-model="config.imgHeight" :min="50" :max="300"></el-slider>
      </el-form-item>
      <el-form-item label="图片间距">
        <el-slider
          v-model="config.spaceBetween"
          :min="0"
          :max="100"
        ></el-slider>
      </el-form-item>
      <el-form-item label="数据类型">
        <el-radio v-model="config.dataType" :label="0">静态数据</el-radio>
        <el-radio v-model="config.dataType" :label="1">接口数据</el-radio>
      </el-form-item>
      <!-- 静态数据配置 -->
      <template v-if="!config.dataType">
        <el-form-item label="图片列表">
          <operation-list v-model="config.list" @edit="open" @add="add">
            <template v-slot="{ item }">
              <div class="pt5 pb5 f13 f-bold lb-1">
                {{ item.name }}
              </div>
            </template>
          </operation-list>
        </el-form-item>
      </template>
      <!-- 接口数据配置 -->
      <template v-else>
        <div class="conf-btn" @click="sourceShow = true">配置接口数据</div>
        <source-list
          v-if="sourceShow"
          :show.sync="sourceShow"
          :id="config.source.id"
          @select="select"
        ></source-list>
      </template>
    </el-form>

    <!-- 编译 -->
    <el-dialog width="25%" :visible.sync="show" :append-to-body="true">
      <div slot="title" class="dialog-title">编辑数据源</div>
      <!-- {{ cloneData }} -->
      <el-form
        :model="cloneData"
        ref="ruleForm"
        label-width="120px"
        class="demo-ruleForm"
      >
        <el-form-item label="名字" prop="title">
          <el-input
            v-model="cloneData.name"
            size="small"
            style="width: 250px"
          ></el-input>
        </el-form-item>
        <el-form-item label="图片地址" prop="url">
          <material-upload v-model="cloneData.url"></material-upload>
        </el-form-item>
        <el-form-item label="跳转" prop="url">
          <div class="jump-btn" @click="$refs['jump'].open()">
            <i class="iconfont icon-tiaozhuan"></i>
          </div>
        </el-form-item>
        <el-form-item label="数据池赋值数据" prop="url">
          <el-input
            v-model="cloneData.pool_value"
            size="small"
            style="width: 250px"
          ></el-input>
        </el-form-item>
        <jump ref="jump" v-model="cloneData.jump"></jump>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="show = false">取 消</el-button>
        <el-button type="primary" @click="submit">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
import { getRandomCode } from "@/utils/tools";
let themeObj = {
  // 基础主题
  base: {
    autoplay: true,
    loop: true,
    pagination: true,
    center: true,
    imgRadius: false,
    crown: false,
    imgWidth: 100,
    imgHeight: 180,
    spaceBetween: 0,
  },
  // 卡片主题
  card: {
    autoplay: true,
    loop: true,
    pagination: true,
    center: true,
    imgRadius: true,
    crown: true,
    imgWidth: 80,
    imgHeight: 180,
    spaceBetween: 0,
  },
  // 链式主题
  chain: {
    autoplay: true,
    loop: true,
    pagination: false,
    center: false,
    imgRadius: false,
    crown: false,
    imgWidth: 80,
    imgHeight: 180,
    spaceBetween: 10,
  },
};
export default {
  name: "ls-swiper-config",
  props: {
    params: {
      type: Object,
    },
  },
  data() {
    return {
      themes: [
        {
          theme: "base",
          img: require("@/assets/base/base-swiper.jpg"),
          icon: "icon-lunbo1",
        },
        {
          theme: "card",
          img: require("@/assets/base/card-swiper.jpg"),
          icon: "icon-lunbo",
        },
        {
          theme: "chain",
          img: require("@/assets/base/chain-swiper.jpg"),
          icon: "icon-ziyuan",
        },
      ],
      editIndex: 0,
      cloneData: {},
      show: false,
      sourceShow: false,
    };
  },
  computed: {
    config() {
      return this.params;
    },
  },
  methods: {
    setTheme(theme) {
      let params = this.params;
      let cuurent = themeObj[theme];
      for (let key in cuurent) {
        this.$set(this.config, key, cuurent[key]);
      }
      console.log(this.config);
    },
    open(i) {
      this.editIndex = i;
      this.cloneData = this._.cloneDeep(this.config.list[i]);
      this.show = true;
    },
    submit() {
      this.$refs["ruleForm"].validate((valid) => {
        if (valid) {
          this.$set(this.config.list, this.editIndex, this.cloneData);
          this.show = false;
        } else {
          return false;
        }
      });
    },
    add() {
      if (this.config.list.length == 5) {
        this.$notify({
          message: "最多只能添加5张图片哦",
          type: "warning",
          offset: 100,
          duration: 1000,
        });
        return;
      }
      this.config.list.push({
        name: "这有一个新轮播图",
        webPath: "",
        wechatPath: "",
      });
    },
    select(id) {
      this.config.source.id = id;
    },
  },
};
</script>

<style lang="scss" scoped>
.ls-swiper-config {
  .theme {
    display: flex;
    justify-content: space-around;
    margin-bottom: 20px;
    i {
      font-size: 24px;
      color: #bfbfbf;
      cursor: pointer;

      &:hover {
        color: $theme-color;
      }
    }
    img {
      width: 20px !important;
      height: 10px !important;
    }
  }
}
</style>