import { Moment } from 'moment';

export interface CurrentUserEntity {
  id: string;
  isActive: boolean;
  userName: string;
  normalizedUserName: string;
  email?: string;
  normalizedEmail?: string;
  emailConfirmed: boolean;
  phoneNumber: string;
  phoneNumberConfirmed: boolean;

  profile?: UserProfile;
}

export interface UserAvatar {
  id: number;
  userProfileId: number;
  normalImageUrl: string;
  thumbNailUrl: string
}

export interface UserProfile {
  id: number;
  userId: string;
  firstName: string;
  surname: string;
  genderId: 0;
  nationalId: string;
  dateOfBirth: Moment;
  dateCreated: Moment;
  dateModified: Moment;
  gender: {
    id: number;
    name: string;
  };
  userAvatar: UserAvatar;
  userLocation: {
    id: number;
    city: string;
    addressLine1: string;
    addressLine2: string;
    country: string;
    region: string;
    userProfileId: number
  }
}
