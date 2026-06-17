/** Verified Unsplash photo IDs (all return HTTP 200). */
const ids = {
  ceo: "photo-1560250097-0b93528c311a",
  marketingLead: "photo-1607746882042-944635dfe10e",
  creativeDirector: "photo-1519085360753-af0119f7cbe7",
  accountManager: "photo-1507591064344-4c6ce005b128",
  digitalSpecialist: "photo-1556157382-97eda2d62296",
  communicationOfficer: "photo-1594744803329-e58b31de8bf5",
  teamMeeting: "photo-1600880292089-90a7e086ee0c",
  africanBusiness: "photo-1619895862022-09114b41f16f",
  groupCollaboration: "photo-1529156069898-49953e39b3ac",
  teamDiscussion: "photo-1551836022-d5d88e9218df",
  officeTeam: "photo-1600880292203-757bb62b4baf",
  businessMeeting: "photo-1542744173-8e7e53415bb0",
  teamWork: "photo-1553877522-43269d4ea984",
  startupTeam: "photo-1556761175-b413da4baf72",
  womenMeeting: "photo-1552664730-d307ca884978",
  teamLaptop: "photo-1522071820081-009f0129c71c",
  professionalPortrait: "photo-1624561172888-ac93c696e10c",
} as const;

export function unsplash(id: string, width = 800) {
  return `https://images.unsplash.com/${id}?w=${width}&q=80&auto=format`;
}

export const images = {
  team: {
    ceo: unsplash(ids.ceo, 400),
    marketingLead: unsplash(ids.marketingLead, 400),
    creativeDirector: unsplash(ids.creativeDirector, 400),
    accountManager: unsplash(ids.accountManager, 400),
    digitalSpecialist: unsplash(ids.digitalSpecialist, 400),
    communicationOfficer: unsplash(ids.communicationOfficer, 400),
    banner: unsplash(ids.teamMeeting, 1200),
  },
  hero: {
    teamMeeting: unsplash(ids.teamMeeting, 900),
    africanBusiness: unsplash(ids.africanBusiness, 700),
    groupCollaboration: unsplash(ids.groupCollaboration, 700),
    teamDiscussion: unsplash(ids.teamDiscussion, 700),
    officeTeam: unsplash(ids.officeTeam, 700),
  },
  services: {
    strategy: unsplash(ids.africanBusiness, 600),
    communication: unsplash(ids.businessMeeting, 600),
    branding: unsplash(ids.professionalPortrait, 600),
    digital: unsplash(ids.womenMeeting, 600),
    consulting: unsplash(ids.teamMeeting, 600),
    events: unsplash(ids.groupCollaboration, 600),
  },
  pages: {
    aboutHero: unsplash(ids.teamMeeting, 1200),
    contactOffice: unsplash(ids.businessMeeting, 600),
    homeTeamBanner: unsplash(ids.officeTeam, 1400),
    homeApproach: unsplash(ids.womenMeeting, 800),
  },
  portfolio: {
    telecom: unsplash(ids.groupCollaboration, 800),
    fintech: unsplash(ids.africanBusiness, 600),
    retail: unsplash(ids.womenMeeting, 600),
    fmcg: unsplash(ids.teamMeeting, 800),
  },
  fullscreen: {
    vision: unsplash(ids.groupCollaboration, 1920),
    services: unsplash(ids.africanBusiness, 1920),
  },
} as const;
