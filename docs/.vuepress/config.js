const nav = require("./config/nav.js")
const music = require('./config/music.js')
module.exports = {
  title: "Mr.bilent",
  description: "前端博客，web学习与总结。JavaScript、ES6、TypeScript、Vue、CSS3、HTML5、Node、Git、工具类等技术文章。", // 描述,以 <meta> 标签渲染到页面html中
  // base: '/web-blog/', // '/<github仓库名>/'， 默认'/'
  head: [
    // 注入到页面<head> 中的标签，格式[tagName, { attrName: attrValue }, innerHTML?]
    ["link", { rel: "icon", href: "/img/favicon.ico" }], //favicons，资源放在public文件夹
    [
      "meta",
      {
        name: "keywords",
        content: "前端博客、个人技术博客、前端、前端开发、前端框架、web前端、前端面试题、技术文档、学习、面试、JavaScript、ES6、TypeScript、Vue、CSS3、HTML5、Node、Git、Webpack",
      },
    ],
    ["meta", { name: "baidu-site-verification", content: "31bCMF4YDC" }], // 百度统计博主验证
    ["meta", { name: "theme-color", content: "#11a8cd" }] // 移动浏览器主题颜色
  ],
  markdown: {
    lineNumbers: true, // 代码行号
  },
  // theme: 'vdoing', // 使用依赖包主题
  theme: require.resolve("../../theme-vdoing"), // 使用本地主题
  themeConfig: {
    // music control
    music,
    nav,
    sidebarDepth: 2, // 侧边栏显示深度，默认1，最大2（显示到h3标题）
    logo: "/img/logo.png", // 导航栏logo
    repo: "https://github.com/lixiaoming-bit", // 导航栏右侧生成Github链接
    searchMaxSuggestions: 10, // 搜索结果显示最大数
    lastUpdated: "上次更新", // 更新的时间，及前缀文字   string | boolean (取值为git提交时间)
    docsDir: "docs", // 编辑的文件夹
    editLinks: false, // 启用编辑
    editLinkText: "编辑",

    // 以下配置是Vdoing主题改动的和新增的配置
    // category: false, // 是否打开分类功能，默认true。 如打开，会做的事情有：1. 自动生成的frontmatter包含分类字段 2.页面中显示与分类相关的信息和模块 3.自动生成分类页面（在@pages文件夹）。如关闭，则反之。
    // tag: false, // 是否打开标签功能，默认true。 如打开，会做的事情有：1. 自动生成的frontmatter包含标签字段 2.页面中显示与标签相关的信息和模块 3.自动生成标签页面（在@pages文件夹）。如关闭，则反之。
    // archive: false, // 是否打开归档功能，默认true。 如打开，会做的事情有：1.自动生成归档页面（在@pages文件夹）。如关闭，则反之。
    // categoryText: '随笔', // 碎片化文章（_posts文件夹的文章）预设生成的分类值，默认'随笔'
    // bodyBgImg: [], // body背景大图，默认无。 单张图片 String || 多张图片 Array, 多张图片时每隔15秒换一张。
    // titleBadge: false, // 文章标题前的图标是否显示，默认true
    // titleBadgeIcons: [ // 文章标题前图标的地址，默认主题内置图标
    //   '图标地址1',
    //   '图标地址2'
    // ],

    sidebar: "structuring", // 侧边栏  'structuring' | { mode: 'structuring', collapsable: Boolean} | 'auto' | 自定义    温馨提示：目录页数据依赖于结构化的侧边栏数据，如果你不设置为'structuring',将无法使用目录页

    sidebarOpen: false, // 初始状态是否打开侧边栏，默认true
    updateBar: { // 最近更新栏
      showToArticle: true, // 显示到文章页底部，默认true
      moreArticle: '/archives' // “更多文章”跳转的页面，默认'/archives'
    },

    author: {
      // 文章默认的作者信息，可在md文件中单独配置此信息 String | {name: String, href: String}
      name: "Mr.Li", // 必需
      href: "https://github.com/lixiaoming-bit", // 可选的
    },
    blogger: {
      // 博主信息，显示在首页侧边栏
      avatar: "/img/avatar.gif",
      name: "人不疯〃难成功",
      slogan: "欲为诸佛龙象，先做众生牛马",
    },
    social: {
      // 社交图标，显示于博主信息栏和页脚栏
      // iconfontCssFile: '//at.alicdn.com/t/font_1678482_u4nrnp8xp6g.css', // 可选，阿里图标库在线css文件地址，对于主题没有的图标可自由添加
      icons: [{
          iconClass: "icon-youjian",
          title: "发邮件",
          link: "mailto:lxm1482@hanweb.com",
        },
        {
          iconClass: "icon-github",
          title: "GitHub",
          link: "https://github.com/lixiaoming-bit",
        },
      ],
    },
    footer: {
      // 页脚信息
      createYear: 2019, // 博客创建年份
      copyrightInfo: "人不疯〃难成功 | MIT License", // 博客版权信息，支持a标签
    }
  },
  plugins: [
    // 插件
    // [require('./plugins/fireworks')], //本地使用fireworks点击效果
    ['flowchart'], // 流程图
    [
      "thirdparty-search",
      {
        // 可以添加第三方搜索链接的搜索框（原官方搜索框的参数仍可用）
        thirdparty: [
          // 可选，默认 []
          {
            title: "在MDN中搜索",
            frontUrl: "https://developer.mozilla.org/zh-CN/search?q=", // 搜索链接的前面部分
            behindUrl: "", // 搜索链接的后面部分，可选，默认 ''
          },
          {
            title: "在Runoob中搜索",
            frontUrl: "https://www.runoob.com/?s=",
          },
          {
            title: "在Vue API中搜索",
            frontUrl: "https://cn.vuejs.org/v2/api/#",
          },
          {
            title: "在Bing中搜索",
            frontUrl: "https://cn.bing.com/search?q=",
          },
        ],
      },
    ],
    "vuepress-plugin-baidu-autopush", // 百度自动推送
    [
      "one-click-copy",
      {
        // 代码块复制按钮
        copySelector: [
          'div[class*="language-"] pre',
          'div[class*="aside-code"] aside',
        ], // String or Array
        copyMessage: "复制成功", // default is 'Copy successfully and then paste it for use.'
        duration: 1000, // prompt message display time.
        showInMobile: false, // whether to display on the mobile side, default: false.
      },
    ],
    [
      "demo-block",
      {
        settings: {
          jsfiddle: false, // 是否显示 jsfiddle 链接
          codepen: true, // 是否显示 codepen 链接
          horizontal: false, // 是否展示为横向样式
        },
      },
    ],
    [
      "@vuepress/medium-zoom", // 放大图片
      {
        selector: ".theme-vdoing-content img:not(.no-zoom)", // 排除class是no-zoom的图片
        options: {
          // bgColor: "rgba(0,0,0,0.6)",
          margin: 16
        },
      },
    ],
    [
      "vuepress-plugin-baidu-tongji", // 百度统计
      {
        hm: "70c7fc457095652531bc9e956c2f9366",
      },
    ],
    [
      "vuepress-plugin-comment", // 评论
      {
        choosen: "valine",
        options: {
          el: "#valine-vuepress-comment",
          appId: "t6m1Qrg7qsWp4fAB9c8Sv9Ov-gzGzoHsz",
          appKey: "RzQCVIFpC9Neu9kmcEeYo9Pk",
        },
      },
    ],
    [
      "@vuepress/last-updated",
      {
        transformer: (timestamp, lang) => {
          const moment = require("moment");
          return moment(timestamp).format("YYYY/MM/DD, H:MM:SS");
        },
      },
    ],
    ["vuepress-plugin-smooth-scroll"],
    [
      "vuepress-plugin-helper-live2d",
      {
        log: false,
        live2d: {
          // 是否启用(关闭请设置为false)(default: true)
          enable: false,
          // 模型名称(default: hibiki)>>>取值请参考：
          // https://github.com/JoeyBling/hexo-theme-yilia-plus/wiki/live2d%E6%A8%A1%E5%9E%8B%E5%8C%85%E5%B1%95%E7%A4%BA
          model: "epsilon2_1",
          display: {
            position: "left", // 显示位置：left/right(default: 'right')
            width: 135, // 模型的长度(default: 135)
            height: 300, // 模型的高度(default: 300)
            hOffset: 65, //  水平偏移(default: 65)
            vOffset: 0, //  垂直偏移(default: 0)
          },
          mobile: {
            show: false, // 是否在移动设备上显示(default: false)
          },
          react: {
            opacity: 0.8, // 模型透明度(default: 0.8)
          },
        },
      },
    ],
    ["reading-progress"]
  ],
  // configureWebpack: {
  //   //webpack别名 如![Image from alias](~@alias/image.png)
  //   resolve: {
  //     alias: {
  //       '@alias': 'path/to/some/dir'
  //     }
  //   }
  // }
}
