import React from 'react';
import { IonActionSheet } from '@ionic/react';
import { IonButton } from '@ionic/react';
import { IonRow, IonCol } from '@ionic/react';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {showActionSheet: false};
  }
  show=()=>{
    this.setState({showActionSheet: true});
  }
  render() {

    return (<div>
                <IonRow>
                  <IonCol>
                  </IonCol>
                  <IonCol>
                    <IonButton shape="round" fill="outline" color="tertiary" onClick={this.show}>Show Modal</IonButton>
                  </IonCol>
                  <IonCol>
                  </IonCol>
                </IonRow>
                <IonActionSheet
        isOpen={this.state.showActionSheet}
        onDidDismiss={() => this.setState(() => ({ showActionSheet: false }))}
        buttons={[{
          text: 'Delete',
          role: 'destructive',
          icon: 'trash',
          handler: () => {
            console.log('Delete clicked');
          }
        }, {
          text: 'Share',
          icon: 'share',
          handler: () => {
            console.log('Share clicked');
          }
        }, {
          text: 'Play (open modal)',
          icon: 'arrow-dropright-circle',
          handler: () => {
            console.log('Play clicked');
          }
        }, {
          text: 'Favorite',
          icon: 'heart',
          handler: () => {
            console.log('Favorite clicked');
          }
        }, {
          text: 'Cancel',
          icon: 'close',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        }]}
      >
      </IonActionSheet>
            </div>
            );
  }
}

export default App;