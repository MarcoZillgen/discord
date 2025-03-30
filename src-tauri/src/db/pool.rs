use dotenv::dotenv;
use once_cell::sync::Lazy;
use sqlx::PgPool;
use std::env;
use tokio::sync::OnceCell;

pub static POOL: Lazy<OnceCell<PgPool>> = Lazy::new(|| OnceCell::new());

#[allow(dead_code)]
pub async fn init_pool() -> Result<(), sqlx::Error> {
    dotenv().ok();
    let database_url = env::var("DATABASE_URL").expect("DATABASE_URL must be set in .env file");
    let pool = PgPool::connect(&database_url).await?;
    POOL.set(pool).expect("Failed to set database pool");
    Ok(())
}
