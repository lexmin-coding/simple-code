# -*- coding: utf-8 -*-  需要添加这个，否则输入中文运行会报错

# 打印
list = [0 for i in range(20)]
list[0] = 0
list[1] = 1

for i in range(len(list)):
  if i > 1:
    list[i] = list[i-1] + list[i-2]

print(list)
