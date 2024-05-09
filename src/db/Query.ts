export const LOGIN_USER = `SELECT * FROM users WHERE email = $1 AND password = $2`
export const REGISTER_USER = `INSERT INTO public.users ("fullName", password, email, id)
VALUES ($1, $2, $3, $4)
RETURNING id;`

export const GET_USER_BY_ID = `SELECT "fullName", "profileUrl", email, id FROM users WHERE id = $1`

export const GET_USERS = `SELECT "fullName", "profileUrl", email, id FROM users ORDER BY id ASC`
export const DELETE_USER_BY_ID = ` DELETE FROM public.users
WHERE id = $1
RETURNING id;`

export const UPDATE_TOKEN = `UPDATE users SET token = $1 WHERE id = $2
RETURNING id;`
export const UPDATE_USER = `
UPDATE public.users 
SET 
  "fullName" = COALESCE($1, "fullName"),
  email = COALESCE($2, email),
  "profileUrl" = COALESCE($3, "profileUrl")
WHERE id = $4
RETURNING id;`
