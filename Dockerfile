# 빌드 단계
FROM node:12-alpine AS build

WORKDIR /app

# package.json, package-lock.json과 tsconfig.json을 복사
COPY package*.json tsconfig.json ./

# 의존성 설치
RUN npm install

# 앱 소스 복사
COPY . .

# 타입스크립트로 트랜스파일 및 빌드
RUN npm run build

# 프로덕션 단계
FROM nginx:alpine

# 빌드된 파일들을 Nginx가 제공할 수 있도록 복사
COPY --from=build /app/build /usr/share/nginx/html

# Nginx는 기본적으로 80 포트를 사용
EXPOSE 80

# Nginx를 시작
CMD ["nginx", "-g", "daemon off;"]
