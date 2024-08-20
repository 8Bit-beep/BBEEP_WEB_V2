# 적절한 Node.js 18 버전 이미지를 사용합니다.
FROM node:20

# 작업 디렉토리를 설정합니다.
WORKDIR /src

# 필요한 파일들을 복사합니다.
COPY package.json ./

# 의존성을 설치합니다.
RUN npm install

# 소스 코드를 복사합니다.
COPY ./src /app/src

# 빌드 명령어를 실행합니다.
RUN npm run build

# 어플리케이션 실행 명령어
CMD ["npm", "start"]
