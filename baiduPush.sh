#!/usr/bin/env sh

# 抛出错误
set -e

# 百度链接推送
curl -H 'Content-Type:text/plain' --data-binary @urls.txt "http://data.zz.baidu.com/urls?site=https://www.bilent.top&token=IvvHVNWrN8X0V54M"
rm -rf urls.txt # 删除