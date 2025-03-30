use crate::db::pool::POOL;

#[derive(sqlx::FromRow)]
pub struct User {
    pub id: i32,
    pub username: String,
    pub password: String,
    pub email: String,
    #[allow(dead_code)]
    pub created_at: i32,
}

pub async fn add_user(name: &str, password: &str, email: &str) -> Result<(), String> {
    let result = sqlx::query("INSERT INTO users (username, password, email) VALUES ($1, $2, $3)")
        .bind(name)
        .bind(password)
        .bind(email)
        .execute(&*POOL.get().unwrap())
        .await;
    match result {
        Ok(_) => Ok(()),
        Err(e) => Err(format!("Error adding user: {}", e)),
    }
}

pub async fn get_user_by_username(username: &str) -> Result<User, String> {
    let result = sqlx::query_as::<_, User>("SELECT * FROM users WHERE username = $1")
        .bind(username)
        .fetch_one(&*POOL.get().unwrap())
        .await;

    match result {
        Ok(user) => Ok(user),
        Err(e) => Err(format!("Error fetching user: {}", e)),
    }
}
