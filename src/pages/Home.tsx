import {
  IonButton,
  IonButtons,
  IonCard,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonCol,
  IonContent,
  IonGrid,
  IonHeader,
  IonIcon,
  IonImg,
  IonItem,
  IonLabel,
  IonList,
  IonPage,
  IonRow,
  IonTitle,
  IonToolbar,
  useIonToast,
} from '@ionic/react'
import ExploreContainer from '../components/ExploreContainer'
import './Home.css'
import { pizzaOutline } from 'ionicons/icons'

const Home: React.FC = () => {
  const [present] = useIonToast();

  const toppings: string[] = [
    "Pepperoni",
    "Sausage",
    "Extra Cheese",
    "Bell Peppers",
    "Onions",
    "Mushroom",
    "Pineapple",
    "Black Olives"
];

const displayToppings = () => {
  return toppings.map((top) => {
      return (
          <IonItem key={ top }>
              <IonLabel>{ top }</IonLabel>
          </IonItem>
      );
  });
}

const orderNow = () => {
  present({
      color: 'dark',
      position: 'top',
      message: 'Order clicked',
      duration: 2000            
  });
}

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonButton>
              <IonIcon slot="icon-only" icon={pizzaOutline} />
            </IonButton>
          </IonButtons>
          <IonTitle>Pizza Palace</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <h2>Our Favorites</h2>
        <IonGrid>
          <IonRow>
            <IonCol>
              <IonCard>
                <IonImg src="https://images.unsplash.com/photo-1513104890138-7c749659a591?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"></IonImg>
                <IonCardHeader>
                  <IonCardTitle>Cheesy Wonder</IonCardTitle>
                  <IonCardSubtitle>
                    Pizza with fresh mozerella toasted to perfection
                  </IonCardSubtitle>
                </IonCardHeader>
              </IonCard>
            </IonCol>
            <IonCol>
              <IonCard>
                <IonImg src="https://images.unsplash.com/photo-1574071318508-1cdbab80d002?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1469&q=80"></IonImg>
                <IonCardHeader>
                  <IonCardTitle>Margherita</IonCardTitle>
                  <IonCardSubtitle>
                    Cheese pizza topped with fresh tomatoes and basil
                  </IonCardSubtitle>
                </IonCardHeader>
              </IonCard>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol>
              <IonCard>
                <IonImg src="https://images.unsplash.com/photo-1534308983496-4fabb1a015ee?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1476&q=80"></IonImg>
                <IonCardHeader>
                  <IonCardTitle>Pepperoni</IonCardTitle>
                  <IonCardSubtitle>
                    You can't beat a classic pepperoni pizza
                  </IonCardSubtitle>
                </IonCardHeader>
              </IonCard>
            </IonCol>
            <IonCol>
              <IonCard>
                <IonImg src="https://images.unsplash.com/photo-1528137871618-79d2761e3fd5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"></IonImg>
                <IonCardHeader>
                  <IonCardTitle>Arugula Fig</IonCardTitle>
                  <IonCardSubtitle>
                    Tasty combination of fig, arugula, pear and honey
                  </IonCardSubtitle>
                </IonCardHeader>
              </IonCard>
            </IonCol>
          </IonRow>
        </IonGrid>
        <h2>Available Pizza Toppings</h2>
        <IonList>
          { displayToppings() }
        </IonList>
        <IonButton onClick={ orderNow } expand="block" color="danger">Order Now</IonButton>
      </IonContent>
    </IonPage>
  )
}

export default Home
