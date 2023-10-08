export const formatPhoneNumber = (value) => {
  if (!value) return value;
  const phoneNumber = value.replace(/[^\d]/g, "");
  const phoneNumberLength = phoneNumber.length;

  if (phoneNumberLength < 4) return `+${phoneNumber}`;
  if (phoneNumberLength < 6) {
    return `+${phoneNumber.slice(0, 3)} (${phoneNumber.slice(3)})`;
  }
  return `+${phoneNumber.slice(0, 3)} (${phoneNumber.slice(
    3,
    5
  )}) ${phoneNumber.slice(5, 8)}-${phoneNumber.slice(8, 10)}-${phoneNumber.slice(10, 12)}`;
};
