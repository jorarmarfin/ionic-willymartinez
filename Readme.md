# Willy Martinez Sanchez
## Predicador Católico

* Predicas
* Rosario
* Retiros

#030046

```
<ion-content> 
    <ion-card *ngFor="let item of v_asambleas">
        <ion-grid>
            <ion-row>
                <ion-col size="12">
                    <iframe width="100%" 
                    height="344" 
                    [src] = "item.enlace|doomseguro"
                    frameborder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    allowfullscreen></iframe>
                </ion-col>
            </ion-row>
        </ion-grid>
        
        <ion-card-header>
          <ion-card-subtitle>{{ item.author_url }}</ion-card-subtitle>
          <ion-card-title>{{ item.title }}</ion-card-title>
        </ion-card-header>
      
        <ion-card-content>
          Keep close to Nature's heart... and break clear away, once in awhile,
          and climb a mountain or spend a week in the woods. Wash your spirit clean.
        </ion-card-content>
      </ion-card>
</ion-content>
```