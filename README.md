# DevOps 실습 프로젝트 (7/11~7/15)

## 기술 스택
- Node.js
- MongoDB
- Nginx
- Docker, Docker Compose

## 구성
- Node 서버 → MongoDB 연결
- Nginx 리버스 프록시
- `.env` 보안 구성

## 실행
```bash
docker-compose up --build

## 🔁 전체 흐름 복습 요약

| 날짜 | 주요 실습 | 결과 |
|------|----------|------|
| 7/11 | Node 컨테이너화 | Docker로 웹 서버 띄움 |
| 7/12 | MongoDB 연결 | backend + db 동시 실행 |
| 7/13 | Nginx 추가 | 요청 흐름 분리 이해 |
| 7/14 | .env 적용 | 민감정보 관리 개선 |
| 7/15 | 정리/업로드 | 포트폴리오 첫 구성 |