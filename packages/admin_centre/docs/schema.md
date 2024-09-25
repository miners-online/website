# Database schema

Prisma schema located at [../prisma/schema.prisma](../prisma/schema.prisma)

* API Client
- has a UUID
- has a name

* API tokens
- owned by an API client
- has a UUID
- contains a string value

* Token permissions
- owned by an API token
- has a UUID
- contains a string value

* Player
- has a UUID
- has a name

* Game
- has a UUID
- has a name

* Player statistic
- owned by a player
- has a UUID
- contains a string "key"
- contains a string "value"
- references a game