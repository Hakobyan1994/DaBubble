import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { getDatabase, provideDatabase } from '@angular/fire/database';
import { getStorage, provideStorage } from '@angular/fire/storage';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideFirebaseApp(() =>
      initializeApp({
        apiKey: "AIzaSyCo0ybbXH_jXlSmyAFt3a1sGeLZ9IPAY9g",
        authDomain: "dabubble-30df0.firebaseapp.com",
        projectId: "dabubble-30df0",
        storageBucket: "dabubble-30df0.firebasestorage.app",
        messagingSenderId: "1081658483093",
        appId: "1:1081658483093:web:5f53b10dea4ce8cd92969c"
      })
    ),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore()),
    provideDatabase(() => getDatabase()),
    provideStorage(() => getStorage()), provideAnimationsAsync(),
    provideAnimationsAsync(),
  ],
};
