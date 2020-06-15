#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

# 生成静态文件
npm run build

# 进入生成的文件夹
cd docs/.vuepress/dist

# deploy to github
echo 'bilent.top' > CNAME
if [ -z "$GITHUB_TOKEN" ]; then
  msg='deploy'
  # githubUrl=git@github.com:xugaoyi/vuepress-theme-vdoing.git
  githubUrl=git@github.com:lixiaoming-bit/web-blog.git
else
  msg='来自github actions的自动部署'
  # githubUrl=https://xugaoyi:${GITHUB_TOKEN}@github.com/xugaoyi/vuepress-theme-vdoing.git
  githubUrl=https://lixiaoming-bit:${GITHUB_TOKEN}@github.com/lixiaoming-bit/web-blog.git
  git config --global user.name "lixiaoming"
  git config --global user.email "1404241558@qq.com"
fi
git init
git add -A
git commit -m "${msg}"
git push -f $githubUrl master:gh-pages # 推送到github

# deploy to coding
echo 'bilent.top' > CNAME  # 自定义域名
if [ -z "$MAYUN_TOKEN" ]; then  # -z 字符串 长度为0则为true；$MAYUN_TOKEN来自于github仓库`Settings/Secrets`设置的私密环境变量
  mayunUrl=git@gitee.com:lixiaoming888888/web-blog.git
else
  # mayunUrl=https://gitee.com/lixiaoming888888/web-blog.git
  mayunUrl=https://lixiaoming888888:${MAYUN_TOKEN}@gitee.com/lixiaoming888888/web-blog.git
  git config --global user.name "lixiaoming"
  git config --global user.email "1404241558@qq.com"
fi
git add -A
git commit -m "${msg}"
git push -f $mayunUrl master:gh-pages # 推送到码云

cd - # 退回开始所在目录
rm -rf docs/.vuepress/dist