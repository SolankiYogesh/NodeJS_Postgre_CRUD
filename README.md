
# CRUD
![image](https://github.com/SolankiYogesh/NodeJS_Postgre_CRUD/assets/70507671/5c05f02c-76f3-487c-ba54-5f4fd920e48d)

## End-point: getUsers
### Method: GET
>```
>http://localhost:3000/users
>```
### Headers

|Content-Type|Value|
|---|---|
|Authorization|eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE3MTUyNTQyMjUsImRhdGEiOiJ7XCJmdWxsTmFtZVwiOlwiWW9nZXNoXCIsXCJwcm9maWxlVXJsXCI6bnVsbCxcImVtYWlsXCI6XCJzb2xhbmtpQGdtYWlsLmNvbVwiLFwiaWRcIjpcIjhlNzFjMTljLTE3NGQtNDE4OC1hNzQyLWVmODM0YzE5N2JmOVwifSIsImlhdCI6MTcxNTI1MDYyNX0.q-4oV1PgnejclnG-DkpjOORBHsiVzoslsrmasx8hp-w|



⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: getUserById
### Method: GET
>```
>http://localhost:3000/users/1
>```

⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: deleteUserById
### Method: DELETE
>```
>http://localhost:3000/users/8ca0733d-0df6-4982-b4ad-180c03818f5f
>```

⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: createUser
### Method: POST
>```
>http://localhost:3000/users
>```
### Body (**raw**)

```json
{
    "fullName":"Yogesh",
    "password":"12345",
    "email":"solanki@gmail.com"
}
```


⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: updateUser
### Method: POST
>```
>http://localhost:3000/users/update
>```
### Headers

|Content-Type|Value|
|---|---|
|Authorization|eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE3MTUyNTQzNDksImRhdGEiOiJ7XCJmdWxsTmFtZVwiOlwiWW9nZXNoXCIsXCJwcm9maWxlVXJsXCI6bnVsbCxcImVtYWlsXCI6XCJzb2xhbmtpQGdtYWlsLmNvbVwiLFwiaWRcIjpcIjhlNzFjMTljLTE3NGQtNDE4OC1hNzQyLWVmODM0YzE5N2JmOVwifSIsImlhdCI6MTcxNTI1MDc0OX0.NmGwbgjNBf7w2nx1F_PEzLHaL0x6J63HcQXUsqwqsOM|


### Body (**raw**)

```json
{
    "fullName":"Yogesh",
    "password":"12345",
    "email":"solanki@gmail.com",
    "id":"8e71c19c-174d-4188-a742-ef834c197bf9",
    "profileUrl":"https://picsum.photos/200/300"
}
```


⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: login
### Method: POST
>```
>http://localhost:3000/users/login
>```
### Body (**raw**)

```json
{
    "password":"12345",
    "email":"solanki@gmail.com"
}
```


⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃
