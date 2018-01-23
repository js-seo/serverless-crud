# Serverless로 API 서버 만들어보기

## Serverless

### Serverless Framework

- Lambda, Google Cloud Functions 등의 서비스를 이용해, 항상 돌아가는 서버가 없는 백엔드를 쉽게 구축하게 도와주는 프레임워크
- 템플릿을 설정하고, `serverless deploy`라는 커맨드 하나로 바로 디플로이가 가능 

### Serverless Architecture의 장단점

#### 장점 : No-ops

서버를 운영하는데 드는 모든 시간/인력비용이 사라진다.

- 쉬운 디플로이
- 프로비저닝이 필요없다. (100개 콜이 들어오면 100개 컨테이너가 뜬다.)
- 별도의 서버 환경 구축이 필요없다.

#### 단점

- 비용: 일정 규모 이상이면 서버 비용은 EC2로 돌리는 게 더 저렴 (람다 기준)

## 실습

>  일단 되게 해보자!

- IAM 설정
  - Admin 권한, Programmatic Access
  - Key, Secret을 적어둡시다.
- AWS CLI 설치 및 설정
  - AWS 설치: `pip install awscli --upgrade —user`
    - Check installation : `aws --version`
  - AWS 설정
    - `aws configure --profile serverless-seminar`
    - Key, Secret, Region (`ap-northeast-2`)
- `git clone https://github.com/js-seo/serverless-crud`
- 디플로이: `yarn deploy`
  - 리소스 생성 (dynamoDB table) 위함 
- 로컬 서버 (`serverless-offline` 플러그인)
  - `export AWS_REGION='ap-northeast-2'`
  - `export AWS_PROFILE='serverless-seminar'`
  - `yarn start`
- `yarn test`
  - baseURL 바꿔서 테스트해보기
- 리액트 프로젝트에서 사용해보기
  - `git clone https://github.com/js-seo/post-app.git`
  - `App.js`에서 `baseURL`만 바꿔서 테스트해보기

## 심화

>  일단 돌아가게는 했는데 이게 어떻게 되는거지?

- [CloudFormation](https://ap-northeast-2.console.aws.amazon.com/cloudformation/home?region=ap-northeast-2#/stacks?filter=active)
  - [AWS CloudFormation Template](https://docs.aws.amazon.com/ko_kr/AWSCloudFormation/latest/UserGuide/aws-template-resource-type-ref.html)
  - 템플릿에 따라 요청된 서비스들을 생성해주는 서비스
- [APIGateway](https://ap-northeast-2.console.aws.amazon.com/apigateway/home?region=ap-northeast-2#/)
  - 특정 주소로 오는 요청을 람다로 연결해주는 서비스
- [Lambda](https://ap-northeast-2.console.aws.amazon.com/lambda/home?region=ap-northeast-2#/functions)
- [DynamoDB](https://ap-northeast-2.console.aws.amazon.com/dynamodb/home?region=ap-northeast-2#tables:)
  - Key-Value 형태의 No-SQL 데이터베이스

### TDD

>  테스트 케이스를 짜기 전에는 코드를 짜지 않는다

- `mocha`