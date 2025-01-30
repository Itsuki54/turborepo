### 設計

作りたいシステムは以下の3つのサービスから構成される。

1. サービスの権限を編集することができるサービス
2. ユーザーの権限を編集することができるサービス
3. 日報システム

```mermaid
erDiagram
  Service {
    string id
    string name
    string description
  }
  Action {
    string id
    string serviceId
    string action
  }
  Policy {
    string id
    string name
    string jobId
    string actionId
  }
  RolePolicy {
    string id
    string roleId
    string policyId
  }
  Role {
    string id
    string name
  }
  Job {
    string id
    string name
  }
  User {
    string id
    string name
    string email
    string roleId
    string jobId
  }
  Report {
    string id
    string userId
    string title
    string content
    number clap
  }
  Thread {
    string id
    string reportId
    string userId
    string content
  }
  Role ||--o{ User : has
  RolePolicy ||--o{ Policy : has
  RolePolicy ||--o{ Role : has
  Action ||--o{ Policy : has
  Job ||--o{ Policy : has
  Job ||--o{ User : has
  User ||--o{ Report : has
  Report ||--o{ Thread : has
  Service ||--o{ Action : has
```

### issue list
- [ ] モデルの作成
  - [ ] PrismaのSchemaを作成
  - [ ] zodのバリデーションを自動生成
- [ ] モックデータの作成
  - [ ] モックデータを作成
  - [ ] seedコマンドを作成
- [ ] APIの作成
  - [ ] CRUDのエンドポイントを作成
  - [ ] テストを書く
