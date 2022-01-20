import firebaseApp from "./firebase_config";

class cardRepository{
  saveCard(userId, card){
    firebaseApp.database().ref(`${userId}/cards/${card.id}`).set(card);
  }
  removeCard(userId, card){
    firebaseApp.database().ref(`${userId}/cards/${card.id}`).remove();;
  }
}

export default cardRepository;