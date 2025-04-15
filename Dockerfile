FROM node:14
WORKDIR /app
COPY . /app

RUN ln -sf /usr/share/zoneinfo/Asia/Shanghai /etc/localtime && echo 'Asia/Shanghai' >/etc/timezone
RUN npm install
RUN npm install pm2 -g

# 必须是阻塞控制台的程序 否则docker会关闭
CMD echo $SERVER_NAME && echo $AUTHOR_NAME && npm run dev 

ENV SERVER_NAME ='biz-editor'
ENV AUTHOR_NAME = 'shuangyue'
