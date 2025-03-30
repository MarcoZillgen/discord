mod db;
mod invoke;

#[tokio::main]
async fn main() {
    tauri::Builder::default()
        .invoke_handler(tauri::generate_handler![
            invoke::auth::login,
            invoke::auth::signup,
        ])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");

    db::pool::init_pool().await.unwrap();
}
