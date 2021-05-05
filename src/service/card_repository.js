import firebaseApp from './firebase_config';

class CardRepository{
    saveCard(userId, card){
        // firebaseApp.database().ref(`${userId}/cards/${card.id}`.set(card))
    }
}

export default CardRepository;