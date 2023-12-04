export const scrolledTo = (id: string) => {
  const bannerSection = document.getElementById(`${id}`);

  if (bannerSection) {
    bannerSection.scrollIntoView({ behavior: "smooth" });
  }
};
