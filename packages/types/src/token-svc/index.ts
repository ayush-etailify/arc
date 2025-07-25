export enum CommunicationChannel {
  OTP_COMMUNICATION_CHANNEL_WHATSAPP = "OTP_COMMUNICATION_CHANNEL_WHATSAPP",
  OTP_COMMUNICATION_CHANNEL_SMS = "OTP_COMMUNICATION_CHANNEL_SMS",
}

export type CustomerPhoneLogin = {
  phone_number: string;
  channel: CommunicationChannel;
};

export type CustomerPhoneVerifyOtp = {
  phone_number: string;
  otp: string;
  otp_id: string;
};
