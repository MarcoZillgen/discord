use crate::db::user::{self, add_user};

#[tauri::command]
pub async fn login(username: String, password: String) -> Result<(), ()> {
    let user = user::get_user_by_username(&username).await;

    match user {
        Ok(user) => {
            if user.password == password {
                Ok(())
            } else {
                Err(())
            }
        }
        Err(_) => Err(()),
    }
}

#[tauri::command]
pub async fn signup(
    username: String,
    password: String,
    email: String,
) -> Result<serde_json::Value, ()> {
    let user = user::get_user_by_username(&username).await;

    match user {
        Ok(_) => Err(()),
        Err(_) => {
            let adding = add_user(&username, &password, &email).await;
            match adding {
                Ok(_) => {
                    let user = user::get_user_by_username(&username).await.unwrap();
                    let user_json = serde_json::json!({
                        "id": user.id,
                        "username": user.username,
                        "email": user.email,
                    });
                    Ok(user_json)
                }
                Err(_) => Err(()),
            }
        }
    }
}
