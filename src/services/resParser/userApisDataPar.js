export const userListDataParser = (data) => {
  if (!Array.isArray(data)) return [];

  return data.map((user) => ({
    id: user.id,
    name: user.name || "N/A",
    username: user.username || "N/A",
    email: user.email || "N/A",
    phone: user.phone || "N/A",
    website: user.website || "N/A",
    companyName: user.company?.name || "N/A",
    companyCatchPhrase: user.company?.catchPhrase || "",
    companyBs: user.company?.bs || "",
    address: {
      street: user.address?.street || "",
      suite: user.address?.suite || "",
      city: user.address?.city || "",
      zipcode: user.address?.zipcode || "",
      fullAddress: user.address
        ? `${user.address.street}, ${user.address.suite}, ${user.address.city} - ${user.address.zipcode}`
        : "Address not available",
    },
    geo: {
      lat: user.address?.geo?.lat || null,
      lng: user.address?.geo?.lng || null,
    },
    avatar: `https://avatars.dicebear.com/v2/avataaars/${encodeURIComponent(
      user.username,
    )}.svg?options[mood][]=happy`,
  }));
};
