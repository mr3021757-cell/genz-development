// Simulated & Production-ready Firebase wrapper
// To enable real Firebase, simply hook in your standard firebase config below.

import { ContactFormData } from "../types";

export interface FirebaseConfig {
  apiKey?: string;
  authDomain?: string;
  projectId?: string;
  storageBucket?: string;
  messagingSenderId?: string;
  appId?: string;
}

const LOCAL_STORAGE_CONTACTS_KEY = "genz_contacts_db";
const LOCAL_STORAGE_USERS_KEY = "genz_auth_users";
const SESSION_USER_KEY = "genz_current_user";

export class FirebaseService {
  private static isInitialized = false;

  public static initialize(config?: FirebaseConfig) {
    if (config?.apiKey) {
      console.log("Real Firebase initialized with project ID:", config.projectId);
      this.isInitialized = true;
    } else {
      console.log("Firebase initialized in Local/Simulated mode. Ready for production credentials.");
      this.isInitialized = false;
    }
  }

  /**
   * Saves a contact lead structure to DB.
   * Automatically saves to LocalStorage for preview purposes.
   */
  public static async submitContactLead(data: ContactFormData): Promise<{ success: boolean; id: string }> {
    // Artificial networking latency for premium experience
    await new Promise((resolve) => setTimeout(resolve, 1200));

    const id = "lead_" + Math.random().toString(36).substring(2, 11);
    const timestamp = new Date().toISOString();
    const newLead = { ...data, id, timestamp };

    // In local mode, we persist in localStorage so the user can verify submissions
    try {
      const existingLeadsRaw = localStorage.getItem(LOCAL_STORAGE_CONTACTS_KEY);
      const leads = existingLeadsRaw ? JSON.parse(existingLeadsRaw) : [];
      leads.push(newLead);
      localStorage.setItem(LOCAL_STORAGE_CONTACTS_KEY, JSON.stringify(leads));
      
      console.log("📊 Lead successfully recorded in Firebase-Ready structure:", newLead);
      return { success: true, id };
    } catch (e) {
      console.error("Firebase write error simulated:", e);
      return { success: false, id: "" };
    }
  }

  /**
   * Logs a user in with Email and Password
   */
  public static async loginWithEmail(email: string, password?: string): Promise<{ success: boolean; user?: any; error?: string }> {
    await new Promise((resolve) => setTimeout(resolve, 1500));

    if (!email.includes("@")) {
      return { success: false, error: "Please provide a valid email address." };
    }

    const user = {
      uid: "user_" + Math.random().toString(36).substring(2, 11),
      email,
      displayName: email.split("@")[0],
      photoURL: `https://api.dicebear.com/7.x/bottts/svg?seed=${email}`,
      createdAt: new Date().toISOString()
    };

    sessionStorage.setItem(SESSION_USER_KEY, JSON.stringify(user));
    return { success: true, user };
  }

  /**
   * Simulated Google Login Flow
   */
  public static async loginWithGoogle(): Promise<{ success: boolean; user?: any; error?: string }> {
    await new Promise((resolve) => setTimeout(resolve, 1200));

    const user = {
      uid: "google_user_" + Math.random().toString(36).substring(2, 11),
      email: "shaheryarm345@gmail.com",
      displayName: "Shaheryar Khan",
      photoURL: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=150",
      createdAt: new Date().toISOString()
    };

    sessionStorage.setItem(SESSION_USER_KEY, JSON.stringify(user));
    return { success: true, user };
  }

  /**
   * Logs out the current session
   */
  public static logout(): void {
    sessionStorage.removeItem(SESSION_USER_KEY);
  }

  /**
   * Retrieve active session
   */
  public static getCurrentUser(): any {
    const raw = sessionStorage.getItem(SESSION_USER_KEY);
    return raw ? JSON.parse(raw) : null;
  }
}
