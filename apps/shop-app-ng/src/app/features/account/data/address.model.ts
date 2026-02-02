export type AddressField = 'address' | 'country' | 'fullName' | 'phoneNumber';

export interface AddressFormType {
  country: number;
  fullName: string;
  address: string;
  phoneNumber: string;
}
