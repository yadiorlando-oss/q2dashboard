/* Q2 Club Performance Rankings Dashboard — Scripts */
/* Rotaract District 7020 */

const AWARDS={
  "Cap-Haitien":"Silver",
  "Memorial Gonaives":"Gold",
  "Mirebalais":"Bronze",
  "Pignon":"Bronze",
  "E-Club Haiti Global":"Platinum",
  "Campus Henry Christophe at the State University Haiti at Limonade":"Gold",
  "L'Université Quisqueya":"Diamond",
  "Cayes":"Gold",
  "Jacmel":"Platinum",
  "Jérémie":"Silver",
  "Léogane":"Silver",
  "Delmas":"Silver",
  "Petion-Ville":"Platinum",
  "Petion-Ville Sud":"Gold",
  "Port-au-Prince":"Silver",
  "Port-au-Prince Champs Mars":"Silver",
  "Church Teachers' College":"Silver",
  "Mandeville":"Diamond",
  "Kingston":"Platinum",
  "New Kingston":"Platinum",
  "Portmore":"Bronze",
  "St. Andrew":"Gold",
  "Caribbean Maritime University":"Silver",
  "University of Technology":"Gold",
  "University the West Indies-Mona":"Diamond",
  "The Mico University College":"Bronze",
  "East Nassau":"Diamond",
  "University The Bahamas":"Bronze",
  "Nassau Sunset":"Diamond",
  "South East Nassau Centennial":"Diamond",
  "Grand Turk":"Diamond",
  "Providenciales":"Diamond"
};

function awardBadge(name,inline=false){
  const a=AWARDS[name];
  if(!a) return '';
  const cfg={
    Diamond:{bg:'rgba(99,190,255,0.12)',color:'#1a7fc1',border:'rgba(99,190,255,0.35)',icon:'💎'},
    Platinum:{bg:'rgba(180,180,210,0.12)',color:'#5a5a8a',border:'rgba(180,180,210,0.35)',icon:'🏅'},
    Gold:{bg:'rgba(254,189,17,0.12)',color:'#a07800',border:'rgba(254,189,17,0.4)',icon:'🥇'},
    Silver:{bg:'rgba(160,170,185,0.12)',color:'#5a6478',border:'rgba(160,170,185,0.35)',icon:'🥈'},
    Bronze:{bg:'rgba(180,110,60,0.12)',color:'#7a4a1a',border:'rgba(180,110,60,0.35)',icon:'🥉'}
  };
  const c=cfg[a]||cfg.Bronze;
  const size=inline?'font-size:10px;padding:2px 7px;':'font-size:10.5px;padding:3px 10px;';
  return `<span style="display:inline-flex;align-items:center;gap:4px;${size}border-radius:12px;background:${c.bg};color:${c.color};border:1px solid ${c.border};font-weight:600;letter-spacing:.3px;white-space:nowrap">${c.icon} ${a}</span>`;
}

const DATA=[
  {name:"Campus Henry Christophe at the State University Haiti at Limonade",modules:["Community Service Projects","Membership Recruitment and Engagement","Professional Development","Rotary Foundation","Club Administration","Public Image","Wellness","International Service Projects","Fundraising"],cats:["Strategic Alignment and Impact","Execution and Resource Management","Innovation and Creativity","Collaboration and Engagement"]},
  {name:"Cap-Haitien",modules:["Professional Development","Community Service Projects","International Service Projects","Membership Recruitment and Engagement","Fundraising","Public Image","Wellness","Rotary Foundation","Club Administration"],cats:["Strategic Alignment and Impact","Execution and Resource Management","Collaboration and Engagement","Innovation and Creativity"]},
  {name:"Caribbean Maritime University",modules:["Community Service Projects","Fundraising","Professional Development","Public Image","Membership Recruitment and Engagement","Club Administration","Rotary Foundation","International Service Projects","Wellness"],cats:["Strategic Alignment and Impact","Execution and Resource Management","Innovation and Creativity","Collaboration and Engagement"]},
  {name:"Cayes",modules:["Wellness","Membership Recruitment and Engagement","Community Service Projects","Fundraising","Club Administration","International Service Projects","Professional Development","Rotary Foundation","Public Image"],cats:["Execution and Resource Management","Strategic Alignment and Impact","Collaboration and Engagement","Innovation and Creativity"]},
  {name:"Church Teachers' College",modules:["Membership Recruitment and Engagement","Fundraising","Community Service Projects","Wellness","Club Administration","Public Image","Professional Development","Rotary Foundation","International Service Projects"],cats:["Strategic Alignment and Impact","Execution and Resource Management","Innovation and Creativity","Collaboration and Engagement"]},
  {name:"Delmas",modules:["Community Service Projects","Membership Recruitment and Engagement","Professional Development","Rotary Foundation","Public Image","Club Administration","Wellness","International Service Projects","Fundraising"],cats:["Strategic Alignment and Impact","Execution and Resource Management","Innovation and Creativity","Collaboration and Engagement"]},
  {name:"E-Club Haiti Global",modules:["Public Image","Wellness","Rotary Foundation","Community Service Projects","Fundraising","Membership Recruitment and Engagement","Professional Development","Club Administration","International Service Projects"],cats:["Strategic Alignment and Impact","Execution and Resource Management","Innovation and Creativity","Collaboration and Engagement"]},
  {name:"East Nassau",modules:["Rotary Foundation","Wellness","Club Administration","Membership Recruitment and Engagement","Community Service Projects","Fundraising","Professional Development","Public Image","International Service Projects"],cats:["Strategic Alignment and Impact","Execution and Resource Management","Innovation and Creativity","Collaboration and Engagement"]},
  {name:"Grand Turk",modules:["Community Service Projects","Professional Development","Wellness","International Service Projects","Public Image","Membership Recruitment and Engagement","Fundraising","Rotary Foundation","Club Administration"],cats:["Strategic Alignment and Impact","Execution and Resource Management","Collaboration and Engagement","Innovation and Creativity"]},
  {name:"Jacmel",modules:["Community Service Projects","Professional Development","Membership Recruitment and Engagement","Wellness","Rotary Foundation","International Service Projects","Public Image","Fundraising","Club Administration"],cats:["Strategic Alignment and Impact","Execution and Resource Management","Innovation and Creativity","Collaboration and Engagement"]},
  {name:"Jérémie",modules:["Club Administration","Professional Development","Fundraising","Community Service Projects","International Service Projects","Wellness","Public Image","Membership Recruitment and Engagement","Rotary Foundation"],cats:["Execution and Resource Management","Strategic Alignment and Impact","Innovation and Creativity","Collaboration and Engagement"]},
  {name:"Kingston",modules:["Community Service Projects","Wellness","International Service Projects","Membership Recruitment and Engagement","Professional Development","Rotary Foundation","Fundraising","Public Image","Club Administration"],cats:["Strategic Alignment and Impact","Execution and Resource Management","Innovation and Creativity","Collaboration and Engagement"]},
  {name:"L'Université Quisqueya",modules:["Professional Development","Wellness","International Service Projects","Fundraising","Community Service Projects","Membership Recruitment and Engagement","Public Image","Rotary Foundation","Club Administration"],cats:["Strategic Alignment and Impact","Execution and Resource Management","Collaboration and Engagement","Innovation and Creativity"]},
  {name:"Léogane",modules:["Membership Recruitment and Engagement","Community Service Projects","Wellness","Professional Development","Fundraising","Rotary Foundation","Club Administration","International Service Projects","Public Image"],cats:["Strategic Alignment and Impact","Execution and Resource Management","Collaboration and Engagement","Innovation and Creativity"]},
  {name:"Mandeville",modules:["Membership Recruitment and Engagement","Community Service Projects","Professional Development","International Service Projects","Fundraising","Rotary Foundation","Wellness","Club Administration","Public Image"],cats:["Strategic Alignment and Impact","Execution and Resource Management","Innovation and Creativity","Collaboration and Engagement"]},
  {name:"Memorial Gonaives",modules:["Community Service Projects","Public Image","Professional Development","Membership Recruitment and Engagement","Rotary Foundation","Wellness","Fundraising","Club Administration","International Service Projects"],cats:["Strategic Alignment and Impact","Execution and Resource Management","Collaboration and Engagement","Innovation and Creativity"]},
  {name:"Mirebalais",modules:["International Service Projects","Rotary Foundation","Public Image","Professional Development","Club Administration","Membership Recruitment and Engagement","Community Service Projects","Wellness","Fundraising"],cats:["Strategic Alignment and Impact","Collaboration and Engagement","Execution and Resource Management","Innovation and Creativity"]},
  {name:"Nassau Sunset",modules:["Community Service Projects","Professional Development","Wellness","International Service Projects","Fundraising","Rotary Foundation","Club Administration","Membership Recruitment and Engagement","Public Image"],cats:["Strategic Alignment and Impact","Execution and Resource Management","Collaboration and Engagement","Innovation and Creativity"]},
  {name:"New Kingston",modules:["Community Service Projects","Membership Recruitment and Engagement","Professional Development","Rotary Foundation","Fundraising","International Service Projects","Public Image","Club Administration","Wellness"],cats:["Strategic Alignment and Impact","Execution and Resource Management","Innovation and Creativity","Collaboration and Engagement"]},
  {name:"Petion-Ville",modules:["Membership Recruitment and Engagement","Professional Development","International Service Projects","Community Service Projects","Fundraising","Wellness","Club Administration","Public Image","Rotary Foundation"],cats:["Strategic Alignment and Impact","Execution and Resource Management","Innovation and Creativity","Collaboration and Engagement"]},
  {name:"Petion-Ville Sud",modules:["Wellness","Fundraising","Club Administration","Professional Development","Membership Recruitment and Engagement","Rotary Foundation","International Service Projects","Community Service Projects","Public Image"],cats:["Strategic Alignment and Impact","Execution and Resource Management","Innovation and Creativity","Collaboration and Engagement"]},
  {name:"Pignon",modules:["Community Service Projects","Rotary Foundation","Membership Recruitment and Engagement","Professional Development","International Service Projects","Public Image","Wellness","Fundraising","Club Administration"],cats:["Strategic Alignment and Impact","Execution and Resource Management","Innovation and Creativity","Collaboration and Engagement"]},
  {name:"Port-au-Prince",modules:["Rotary Foundation","Professional Development","Wellness","Community Service Projects","International Service Projects","Membership Recruitment and Engagement","Public Image","Fundraising","Club Administration"],cats:["Strategic Alignment and Impact","Execution and Resource Management","Innovation and Creativity","Collaboration and Engagement"]},
  {name:"Port-au-Prince Champs Mars",modules:["Fundraising","Club Administration","Rotary Foundation","International Service Projects","Wellness","Public Image","Community Service Projects","Professional Development","Membership Recruitment and Engagement"],cats:["Strategic Alignment and Impact","Execution and Resource Management","Innovation and Creativity","Collaboration and Engagement"]},
  {name:"Portmore",modules:["Community Service Projects","Professional Development","International Service Projects","Public Image","Club Administration","Membership Recruitment and Engagement","Rotary Foundation","Wellness","Fundraising"],cats:["Strategic Alignment and Impact","Execution and Resource Management","Innovation and Creativity","Collaboration and Engagement"]},
  {name:"Providenciales",modules:["Wellness","Fundraising","Public Image","Club Administration","Membership Recruitment and Engagement","Rotary Foundation","Professional Development","Community Service Projects","International Service Projects"],cats:["Strategic Alignment and Impact","Execution and Resource Management","Innovation and Creativity","Collaboration and Engagement"]},
  {name:"South East Nassau Centennial",modules:["Fundraising","International Service Projects","Rotary Foundation","Community Service Projects","Public Image","Membership Recruitment and Engagement","Professional Development","Wellness","Club Administration"],cats:["Strategic Alignment and Impact","Execution and Resource Management","Innovation and Creativity","Collaboration and Engagement"]},
  {name:"St. Andrew",modules:["Professional Development","Fundraising","Community Service Projects","Wellness","Rotary Foundation","International Service Projects","Club Administration","Membership Recruitment and Engagement","Public Image"],cats:["Strategic Alignment and Impact","Execution and Resource Management","Innovation and Creativity","Collaboration and Engagement"]},
  {name:"The Mico University College",modules:["Community Service Projects","Membership Recruitment and Engagement","Public Image","Professional Development","Rotary Foundation","International Service Projects","Wellness","Fundraising","Club Administration"],cats:["Strategic Alignment and Impact","Execution and Resource Management","Innovation and Creativity","Collaboration and Engagement"]},
  {name:"University The Bahamas",modules:["Membership Recruitment and Engagement","Community Service Projects","Fundraising","Professional Development","Rotary Foundation","International Service Projects","Public Image","Wellness","Club Administration"],cats:["Strategic Alignment and Impact","Execution and Resource Management","Innovation and Creativity","Collaboration and Engagement"]},
  {name:"University of Technology",modules:["Community Service Projects","Wellness","International Service Projects","Membership Recruitment and Engagement","Club Administration","Fundraising","Rotary Foundation","Professional Development","Public Image"],cats:["Strategic Alignment and Impact","Execution and Resource Management","Innovation and Creativity","Collaboration and Engagement"]},
  {name:"University the West Indies-Mona",modules:["Public Image","International Service Projects","Rotary Foundation","Community Service Projects","Membership Recruitment and Engagement","Professional Development","Wellness","Club Administration","Fundraising"],cats:["Strategic Alignment and Impact","Execution and Resource Management","Innovation and Creativity","Collaboration and Engagement"]}
];

const FEEDBACK = {
  "Cap-Haitien": {
    "Membership Recruitment and Engagement": [
      "Quantitative data helps show the impact of initiatives — for example, how many persons were trained.",
      "This is a good initiative especially because the ratio of active members to registered members is low.",
      "The neXus Membership Amplifier in Project Bingo will give you simple steps to keep prospective and existing members interested.",
      "Outcome of training? How many members or prospective members were present? Did the organisation benefit from the training?"
    ],
    "Professional Development": [
      "This was a unique topic.",
      "Posting pictures from meetings and activities along with flyers makes your social media pages more attractive.",
      "Great initiative — kudos for extending to other youth groups and young leaders."
    ],
    "International Service Projects": [
      "Remember to report this using the Project Bingo submission form.",
      "Great initiative — there is an opportunity for further cultural exchanges and perhaps a visit to clubs in Jamaica."
    ],
    "Public Image": [
      "Consider finding ways to make this more dynamic — for example, use each Friday to highlight a different category of members such as new members, board members, or certain professions.",
      "This was a missed opportunity for the Sponsoring Rotary Club to participate."
    ],
    "Club Administration": [
      "Some of the activities in the Quarterly Challenge count as Club Administration activities, for example having a Rotaract Minute.",
      "This was a missed opportunity to host a members-only forum and share learnings from the club's administrative portfolio."
    ],
    "Community Service Projects": [
      "Clarify whether the proceeds from the club fundraiser were the only financial contribution to the project, and provide the monetary value of goods received."
    ],
    "Rotary Foundation": [
      "This was a missed opportunity to utilise Foundation Month — one of the meetings could have been dedicated to The Rotary Foundation."
    ],
    "Wellness": [
      "This was a missed opportunity to incorporate learning on wellness, such as simple tips and strategies to maintain good mental and physical health."
    ],
    "Fundraising": [
      "Please clarify whether the event was a wellness initiative or a fundraising initiative."
    ]
  },
  "East Nassau": {
    "Wellness": [
      "Great initiative."
    ]
  },
  "Jérémie": {
    "Membership Recruitment and Engagement": [
      "The reported initiative is more suitable for the Community Service Projects module.",
      "If this initiative is related to engaging new or motivating existing members, please provide additional information highlighting this aspect."
    ],
    "Community Service Projects": [
      "Quantitative information will help increase the impact of this report — for example, how many participants or beneficiaries were there?",
      "Note: this initiative may be better suited to the Professional Development module."
    ],
    "Professional Development": [
      "This was an excellent idea."
    ],
    "Fundraising": [
      "More quantitative information is needed — for example, how much money was raised?"
    ],
    "Wellness": [
      "Please note that the reported activity was not conducted during this reporting quarter."
    ]
  },
  "Mirebalais": {
    "Membership Recruitment and Engagement": [
      "The neXus Membership Amplifier in Project Bingo provides straightforward steps the club can use to keep prospective and existing members interested."
    ],
    "Community Service Projects": [
      "The club is encouraged to seek funding to help execute projects from initiatives already identified."
    ],
    "Rotary Foundation": [
      "Where possible, provide more information — for example, who made the presentation on the Rotary Foundation and how many members attended?"
    ],
    "Wellness": [
      "The club is encouraged to contact the Rotary Mental Health Action Group for ideas on innovative wellness initiatives."
    ],
    "Club Administration": [
      "The club is encouraged to contact its Assistant District Rotaract Representative for guidance on administrative matters."
    ]
  },
  "Memorial Gonaives": {
    "Membership Recruitment and Engagement": [
      "Congratulations — inducting six members at once is a commendable achievement.",
      "The neXus Membership Amplifier in Project Bingo will assist in maintaining this momentum."
    ],
    "Community Service Projects": [
      "Quantitative information will assist in showcasing the impact of this project — for example, how many persons benefited?"
    ],
    "Professional Development": [
      "Conducting sessions led by persons with different skills and backgrounds — such as nurses, lawyers, and accountants — will keep sessions more dynamic and engaging for members."
    ],
    "Wellness": [
      "Use the Project Bingo reporting form to submit all activities that meet Project Bingo criteria."
    ],
    "Fundraising": [
      "Quantitative information is useful in assessing the impact of the project — how much money was raised?"
    ],
    "Club Administration": [
      "Club Administration initiatives relate to steps taken to improve the administrative functions of the club."
    ]
  },
  "St. Andrew": {
    "Professional Development": [
      "Great initiative."
    ],
    "Fundraising": [
      "Please clarify whether the club raised the USD $3,500 or whether that figure represents the total raised by the overall run."
    ]
  },
  "Kingston": {
    "Membership Recruitment and Engagement": [
      "Good job setting clear objectives against which to measure success."
    ],
    "Rotary Foundation": [
      "If the club has qualified for the donation challenge under Project Bingo, please use the submission form to report it."
    ],
    "International Service Projects": [
      "Remember to report qualifying Project Bingo items as soon as possible."
    ],
    "Public Image": [
      "Consider highlighting a specific initiative to better demonstrate the club's public image efforts."
    ],
    "Wellness": [
      "The event was promoted as a series rather than a single activity — including social media posts from the series would have strengthened this submission."
    ],
    "Fundraising": [
      "Actively encourage members to wear branded merchandise at meetings and projects to increase public visibility."
    ],
    "Club Administration": [
      "Club Administration focuses on core aspects of running the club — for example, new leadership, meeting procedures, use of Roberts Rules of Order, and updates to club documents such as the constitution and strategic plan."
    ]
  },
  "Jacmel": {
    "Membership Recruitment and Engagement": [
      "Excellent initiative in partnership with Golden Team Haiti.",
      "It is concerning that there is no record of potential members. The neXus Membership Amplifier in Project Bingo provides simple steps to keep prospective and existing members interested."
    ],
    "Community Service Projects": [
      "Inviting universities with health training programmes to have their students participate would be a great way to identify potential new members."
    ],
    "Professional Development": [
      "Excellent initiative — more information about member participation would be helpful."
    ],
    "Rotary Foundation": [
      "If the club now qualifies for the Le don #TRF task in Project Bingo, please use the suitable form to report it."
    ],
    "International Service Projects": [
      "If the club has completed the Campagne #MyIsland, please use the Project Bingo form to report it."
    ],
    "Club Administration": [
      "This is a unique and commendable initiative — other clubs are encouraged to adopt this practice."
    ]
  },
  "Delmas": {
    "Membership Recruitment and Engagement": [
      "Setting up a testimonials section was a very good idea.",
      "The neXus Membership Amplifier in Project Bingo provides simple steps to keep prospective and existing members interested."
    ],
    "Community Service Projects": [
      "Wearing personalised jerseys with the club's name and logo was an excellent way to promote the club."
    ],
    "International Service Projects": [
      "The District Rotaract International Service Chair can assist in finding a Twin Club if one has not already been identified."
    ],
    "Public Image": [
      "Participating in a conference organised by the Support Group Against Cancer in Haiti was a very effective way to extend the club's public image reach."
    ],
    "Wellness": [
      "Please keep in mind the reporting criteria — this activity was conducted during the previous reporting period and should have been reported at that time."
    ],
    "Fundraising": [
      "It is important to conduct fundraising initiatives on a continuous basis, as this strengthens the club's capacity to execute projects."
    ]
  },
  "E-Club Haiti Global": {
    "Membership Recruitment and Engagement": [
      "This was a very creative initiative."
    ],
    "Professional Development": [
      "More detail would be helpful — for example, what did the 'practical, skills-based approach' that was mentioned actually look like?"
    ],
    "Rotary Foundation": [
      "Good job combining a Rotary Foundation awareness, fundraising, and fellowship activity into one initiative."
    ],
    "Public Image": [
      "The multi-channel approach is very commendable.",
      "Including a breakdown of the reach and impact of each channel is also commendable."
    ],
    "Club Administration": [
      "It is recommended that specific activities be crafted to strengthen the administrative capacity of the club — for example, introducing new policies, processes, or systems that will improve how the club is run."
    ]
  },
  "Port-au-Prince Champs Mars": {
    "Membership Recruitment and Engagement": [
      "This module addresses both Membership Recruitment and Engagement. Whilst some activities were geared towards engagement, more focused recruitment activities would have strengthened this submission."
    ],
    "Community Service Projects": [
      "The club noted its intention to provide more bags and include more products in the future. The neXus Resource Pack contains financial resources the club can access to support this goal."
    ],
    "Professional Development": [
      "The list of lessons learned was very insightful and provides a strong foundation for improving future professional development sessions."
    ],
    "Rotary Foundation": [
      "It was noted in the Quarter 2 Challenge that the club uploaded screenshots showing issues with paying dues through MyRotary. If this has been resolved, please contact the DRR to proceed with the TRF donation submission."
    ],
    "International Service Projects": [
      "Links and flyers for any virtual meetings hosted by the club can be shared within the International Service module."
    ],
    "Public Image": [
      "Combining the Purple Pinkies initiative with Pin Friday was a strategic and effective decision.",
      "For future reference, activities not executed directly by the club should not be included in the club's report."
    ],
    "Wellness": [
      "The club demonstrated good collaborative spirit by conducting this initiative through the combined efforts of members and their friends."
    ]
  },
  "Port-au-Prince": {
    "Membership Recruitment and Engagement": [
      "The work done to ensure the smooth integration of existing members could have been highlighted more prominently in this submission."
    ],
    "Community Service Projects": [
      "Some additional qualitative information would strengthen this report — for example, what was unique about the experience?"
    ],
    "Professional Development": [
      "Whenever possible, share social media posts showing the club executing activities, as this also promotes the club's work."
    ],
    "Rotary Foundation": [
      "Given the success of this meeting, consideration should be given to hosting more meetings focused on the Rotary Foundation."
    ],
    "International Service Projects": [
      "If the club has met the requirements for the 12 Jours de Gentillesse challenge, please use the suitable Project Bingo form to report it."
    ],
    "Public Image": [
      "This module can also be used to share examples of Public Image activities that did not fall under a designated module."
    ],
    "Wellness": [
      "This activity could also have been reported as a Public Image activity."
    ],
    "Fundraising": [
      "Focusing efforts on internal structuring, strengthening cohesion among members, and undertaking meaningful projects will help the club attract sponsors."
    ],
    "Club Administration": [
      "Some of the Rotary Learning Center activities included in the Quarter 2 Challenge qualify as Club Administration activities."
    ]
  },
  "Portmore": {
    "Membership Recruitment and Engagement": [
      "Evidence was not submitted for the Quarter Two Challenge.",
      "Aim to include membership engagement activities alongside recruitment activities to provide a more balanced submission."
    ],
    "Community Service Projects": [
      "More specifics are needed — for example, how many Interact Clubs were involved and how many packages were distributed?",
      "When completing the Lessons Learned section, always include what could be improved in future iterations."
    ],
    "Professional Development": [
      "Share visuals from executed activities on social media pages. Whilst posters and flyers serve as invitations, it is also important to capture images during the actual initiative."
    ],
    "Rotary Foundation": [
      "The Joint Meeting could have been reported under this module.",
      "Guidance on using Rotary International's platforms is available at the Rotary Foundation learning resource page."
    ],
    "International Service Projects": [
      "If this was executed in conjunction with your Twin Club, it may meet Project Bingo criteria — please verify and use the suitable form to report it."
    ],
    "Public Image": [
      "This was an opportunity to find creative ways to execute the recommended activities, and further thought could be given to uniqueness."
    ],
    "Fundraising": [
      "Efforts to solicit cash donations for Hurricane Melissa activities may have qualified for the Project Bingo Fundraising Challenge."
    ],
    "Club Administration": [
      "Please note that the Initiative Name does not match the Description — this should be corrected in future submissions."
    ]
  },
  "South East Nassau Centennial": {
    "Club Administration": [
      "Consider inviting the Sponsoring Rotary Club President or Youth Service Director for support and guidance."
    ]
  },
  "Pignon": {
    "Membership Recruitment and Engagement": [
      "The neXus Membership Amplifier in Project Bingo provides easy-to-execute guidelines that will assist in increasing and sustaining club membership."
    ],
    "Community Service Projects": [
      "This was a very good initiative. Given the President's background as an agronomist, this could be an area the club continues to build on in the future."
    ],
    "Professional Development": [
      "If members are experiencing difficulties accessing MyRotary, the District Dues Guide and the MyRotary User Guide — available in the Club Administration Folder of the Resource Pack — will be of assistance."
    ],
    "Rotary Foundation": [
      "The hospital and the individuals who administered the vaccines can be considered partners and should be formally acknowledged."
    ],
    "International Service Projects": [
      "Contact the District Rotaract International Service Chair for assistance with connecting to clubs outside of the district."
    ],
    "Wellness": [
      "Where relevant, the club has the ability to report a single activity under more than one module."
    ],
    "Fundraising": [
      "It is commendable that strategies have been put in place to execute a fundraising initiative in the coming months."
    ],
    "Club Administration": [
      "Club Administration encompasses actions taken to improve the administrative functions of the club, such as introducing a new policy, hosting club training, or implementing organisational improvements."
    ]
  },
  "Petion-Ville Sud": {
    "Membership Recruitment and Engagement": [
      "It was a commendable decision to include district leadership in this initiative — this is a great way to add credibility and generate interest."
    ],
    "Community Service Projects": [
      "In the Lessons Learned section, please take time to identify specific ways the project could be improved in the future."
    ],
    "Rotary Foundation": [
      "The club may now qualify to meet the #TRF Donation task in Project Bingo. If this is the case, please use the submission form to report it."
    ],
    "International Service Projects": [
      "This project can be submitted using the Project Bingo reporting form — please include a copy of the flyer."
    ],
    "Public Image": [
      "Public Image initiatives are those focused on bringing increased public awareness to the work of Rotaract and Rotary."
    ],
    "Wellness": [
      "The information provided in the 'If not reporting an initiative' section would be better suited under one of the other modules."
    ],
    "Fundraising": [
      "This was a very good initiative."
    ]
  },
  "Mandeville": {
    "Membership Recruitment and Engagement": [
      "There is concern regarding the gap between registered and active members. The board is encouraged to attend the Membership Development session."
    ],
    "Community Service Projects": [
      "Good membership turnout for this initiative."
    ],
    "Professional Development": [
      "Posting more videos of members actively engaging in training would increase the visibility and impact of these sessions."
    ],
    "Rotary Foundation": [
      "The club may have met the requirement for the #TRF Donation grid in Project Bingo — if so, please use the suitable form to report it."
    ],
    "International Service Projects": [
      "The club may have met the requirement for the #MyIslandCampaign grid in Project Bingo — if so, please use the suitable form to report it."
    ],
    "Public Image": [
      "Consider distributing this content via email to members, prospective members, Rotarians, and other key stakeholders."
    ],
    "Club Administration": [
      "The neXus Membership Amplifier from Project Bingo contains tools that can build upon the club's existing approach to membership development."
    ]
  },
  "Petion-Ville": {
    "Membership Recruitment and Engagement": [
      "This was a good idea.",
      "Providing more information about this initiative would have been helpful to those reviewing the report."
    ],
    "Professional Development": [
      "More details are needed — it was stated that human resources were used effectively, but no further explanation was provided."
    ],
    "Rotary Foundation": [
      "The use of custom frames was a good idea."
    ],
    "International Service Projects": [
      "Remember to report this using the Project Bingo reporting form."
    ],
    "Wellness": [
      "The Lessons Learned section does not include any information on how the project could have been improved — this should be addressed in future submissions."
    ],
    "Fundraising": [
      "This initiative also served as an opportunity to promote the club to the activity participants."
    ],
    "Club Administration": [
      "Good job."
    ]
  },
  "Léogane": {
    "Membership Recruitment and Engagement": [
      "This was an excellent initiative — congratulations.",
      "The neXus Membership Amplifier from Project Bingo will assist in maintaining this momentum."
    ],
    "Professional Development": [
      "In the Lessons Learned section, please indicate what could be improved about the initiative."
    ],
    "Rotary Foundation": [
      "Quantitative information will assist in assessing the impact of initiatives — for example, how many Rotarians attended?"
    ],
    "International Service Projects": [
      "Quantitative information will assist in assessing the impact of initiatives — for example, how many persons benefited?"
    ],
    "Public Image": [
      "It is commendable that the Public Image Chair attended the Zone 33–34 Public Image Seminar. The lessons from this experience can now be applied to upcoming activities."
    ],
    "Fundraising": [
      "It is excellent that club members were able to provide the decorations for this initiative.",
      "More quantitative information is needed — for example, how many tickets were sold and how much money was raised?"
    ]
  },
  "New Kingston": {
    "Membership Recruitment and Engagement": [
      "Consider assigning members in a strategic manner — for example, grouping new members together with more experienced members."
    ],
    "Professional Development": [
      "Highlighting how The Rotary Foundation directly benefits members is a strong and effective approach."
    ],
    "Rotary Foundation": [
      "Please remember to use the requisite form to make the Project Bingo submission."
    ],
    "Club Administration": [
      "Executing the neXus Membership Amplifier activities can build on the knowledge gained from sessions already conducted."
    ]
  },
  "Cayes": {
    "Membership Recruitment and Engagement": [
      "The neXus Membership Amplifier in Project Bingo can assist in supporting new and existing members as they progress through their Rotaract journey."
    ],
    "Community Service Projects": [
      "More quantitative information is needed — for example, how many hygiene and food kits were distributed, and how many persons benefited?"
    ],
    "Professional Development": [
      "This was an engaging way to introduce members to Rotaract. The Club Administration folder in the Resource Pack has additional tools to support this work."
    ],
    "Fundraising": [
      "If the club now qualifies for the Rotary Foundation donation goal under Project Bingo, please use the reporting form to submit it."
    ]
  },
  "Nassau Sunset": {
    "Community Service Projects": [
      "Great initiative."
    ]
  },
  "Campus Henry Christophe at the State University Haiti at Limonade": {
    "Membership Recruitment and Engagement": [
      "The neXus Membership Amplifier in the Resource Pack can assist with maintaining the interest of prospective and existing members."
    ],
    "Community Service Projects": [
      "Activities such as these, where the club is engaging with many members of the community, also represent an excellent opportunity to identify potential new members."
    ],
    "Professional Development": [
      "This is a good use of partnerships.",
      "In the Resource Context section, please provide more specific information about your partners."
    ],
    "Rotary Foundation": [
      "Please indicate how many members participated in this meeting."
    ],
    "International Service Projects": [
      "This is a very good approach. The club is always encouraged to make strategic decisions about international projects."
    ],
    "Public Image": [
      "Good job with the effort placed into this initiative. It was an important event and was well documented."
    ],
    "Fundraising": [
      "The club is encouraged to attend the District Rotaract Fundraising Webinar and to access the Fundraising folder in the Resource Pack for further guidance."
    ]
  },
  "L'Université Quisqueya": {
    "Membership Recruitment and Engagement": [
      "More information is needed — for example, what were the specific contributions of each partner, and how many new members were gained from this initiative?"
    ],
    "Professional Development": [
      "This was a very good idea. This approach can be applied to many future activities."
    ],
    "International Service Projects": [
      "If the club has met all criteria for the 12 Days of Kindness challenge in Project Bingo, please use the suitable form to report it."
    ],
    "Wellness": [
      "Good use of partnerships.",
      "More quantitative information is needed — for example, how many persons participated?"
    ],
    "Club Administration": [
      "The Club Administration folder in the Resource Pack can assist in finding training resources to support the development of club members."
    ]
  },
  "University of Technology": {
    "Membership Recruitment and Engagement": [
      "The Lessons Learned section raised very good points."
    ],
    "Community Service Projects": [
      "Good job completing multiple activities under this initiative."
    ],
    "Professional Development": [
      "Some of the activities under the Quarterly Challenge qualify as Professional Development activities."
    ],
    "Rotary Foundation": [
      "Rotary Foundation projects and initiatives involve building awareness about the Rotary Foundation or raising funds for it."
    ],
    "International Service Projects": [
      "Stating the pounds of debris collected was effective in communicating the impact of this initiative."
    ],
    "Fundraising": [
      "Stating the profit generated will better convey the success of the event.",
      "Campus-facing events can also be used as an opportunity to recruit new members."
    ]
  },
  "University the West Indies-Mona": {
    "Membership Recruitment and Engagement": [
      "Seating persons in mixed groups was a good idea for fostering connection among members."
    ],
    "Rotary Foundation": [
      "Good job integrating the Interact Clubs into this initiative."
    ],
    "Fundraising": [
      "Campus-facing events can also be used as an opportunity to recruit new members."
    ]
  },
  "The Mico University College": {
    "Community Service Projects": [
      "Including information about the number of meals served would better demonstrate the impact of this initiative."
    ],
    "Professional Development": [
      "Some of the activities conducted under the Quarterly Challenge could have been reported under this module."
    ],
    "International Service Projects": [
      "The meeting with Rotaract Piarco UWI could have been reported under this module and may also meet the criteria for the Twin Club Visits task under Project Bingo."
    ],
    "Public Image": [
      "Use the notes provided under each text box as a guide for what is required under each section."
    ]
  },
  "Caribbean Maritime University": {
    "Fundraising": [
      "Consider inviting the Sponsor Club and other Rotaract clubs to support this initiative and increase fundraising capacity."
    ]
  }
};

function displayName(n){ return 'Rotaract Club of ' + n; }
const SHORT={
  "Community Service Projects":"Community Service",
  "Membership Recruitment and Engagement":"Membership & Engagement",
  "Professional Development":"Professional Development",
  "Rotary Foundation":"Rotary Foundation",
  "Club Administration":"Club Administration",
  "Public Image":"Public Image",
  "Wellness":"Wellness",
  "International Service Projects":"International Service",
  "Fundraising":"Fundraising"
};
const CAT_ICO={"Strategic Alignment and Impact":"◈","Execution and Resource Management":"◉","Innovation and Creativity":"◆","Collaboration and Engagement":"◎"};

function rnC(r){if(r===1)return'r1';if(r===2)return'r2';if(r===3)return'r3';if(r===4)return'r4';if(r===5)return'r5';if(r===6)return'r6';return'r7';}
function bC(r){if(r===1)return'#febd11';if(r<=3)return'#17458f';if(r<=6)return'#005daa';return'#d91b5c';}
function bW(r){return Math.round((10-r)/9*100)+'%';}

function buildRecs(club){
  const m=club.modules;
  const top=m.slice(0,3), mid=m.slice(3,6), low=m.slice(6,9);
  const c1=club.cats[0], c4=club.cats[3];
  const recs=[];

  recs.push({t:'leverage',
    title:`Amplify your strength in ${SHORT[top[0]]||top[0]}`,
    body:`Ranking #1 in <strong>${top[0]}</strong> is your club's clearest competitive advantage in Q2. For your joint Q3–Q4 report, make this strength visible and replicable: document your approach, key activities, and measurable outcomes in detail. The more specific your evidence, the stronger your district score. Consider sharing your process with peer clubs — recognised district leaders in a module often see this noted in their annual assessment.`
  });

  recs.push({t:'leverage',
    title:`Build on your top strategic category: ${c1}`,
    body:`Your highest-ranked category, <strong>${c1}</strong>, is reinforced by strong performances in <strong>${top[0]}</strong> and <strong>${top[1]}</strong>. Use the Q3–Q4 period to design a signature programme that combines these top-ranked modules — this creates compounding impact and gives your joint Q3–Q4 submission a compelling, coherent narrative rather than a list of disconnected activities.`
  });

  recs.push({t:'improve',
    title:`Quick-win target: ${SHORT[mid[0]]||mid[0]}`,
    body:`<strong>${mid[0]}</strong> is ranked ${m.indexOf(mid[0])+1} — it has a working foundation but clear room to grow. A focused intervention over Q3–Q4 (one additional structured activity, better documentation, or a specific participation target) can realistically shift this into your top-3 by the time of your joint submission. Assign a specific club officer to champion this module and set one measurable goal before your submission deadline.`
  });

  if(mid[1]){
    recs.push({t:'improve',
      title:`Set a measurable goal for ${SHORT[mid[1]]||mid[1]}`,
      body:`With <strong>${mid[1]}</strong> at rank ${m.indexOf(mid[1])+1}, a modest, targeted effort can move you meaningfully up the district standings. Clubs that show documented improvement in mid-ranked modules earn recognition for their upward trajectory, not just their absolute position. Set one specific, time-bound target to report on in your joint Q3–Q4 submission — a number, an event, or a documented outcome.`
    });
  }

  recs.push({t:'focus',
    title:`Priority action plan: ${SHORT[low[0]]||low[0]}`,
    body:`<strong>${low[0]}</strong> is your lowest-ranked module at #${m.indexOf(low[0])+1}. For your joint Q3–Q4 submission, this needs a structured intervention — not a general intention to improve. Identify the root cause (resources, member capacity, lack of a designated lead, or limited programme visibility), assign a club officer as champion, and schedule at least two targeted activities before your submission deadline. Documented effort and a clear improvement story are both weighted in district scoring.`
  });

  recs.push({t:'focus',
    title:`Address your weakest strategic category: ${c4}`,
    body:`Your lowest-ranked category, <strong>${c4}</strong>, is reflected in your rankings for <strong>${low[1]||low[0]}</strong> and <strong>${low[2]||low[1]||low[0]}</strong>. This points to a systemic gap rather than a single module issue. Consider whether your current leadership structure adequately covers this area, and whether reaching out to district leaders in these modules — for joint projects, knowledge sharing, or mentorship — could accelerate your improvement before the joint submission deadline.`
  });

  return recs;
}

let activeFilter='all', activeClub=null;

function renderSidebar(q=''){
  const list=document.getElementById('clubList');
  const count=document.getElementById('sbCount');
  let clubs=DATA.slice();
  if(q) clubs=clubs.filter(c=>c.name.toLowerCase().includes(q.toLowerCase()));
  if(activeFilter!=='all') clubs=clubs.slice().sort((a,b)=>a.modules.indexOf(activeFilter)-b.modules.indexOf(activeFilter));
  count.textContent=clubs.length+' club'+(clubs.length!==1?'s':'');
  list.innerHTML=clubs.map(c=>{
    const isA=activeClub&&activeClub.name===c.name;
    const rank1=SHORT[c.modules[0]]||c.modules[0];
    const modRank=activeFilter!=='all'?(c.modules.indexOf(activeFilter)+1):null;
    const idx=DATA.indexOf(c);
    return `<div class="club-item${isA?' active':''}" data-idx="${idx}">
      <div class="ci-name" style="display:flex;align-items:center;gap:7px;flex-wrap:wrap">${displayName(c.name)} ${awardBadge(c.name,true)}</div>
      <div class="ci-sub">${modRank?`Ranked <span>#${modRank}</span> in filter`:`Top: <span>${rank1}</span>`}</div>
    </div>`;
  }).join('');
}

function selectClub(name){
  const club=DATA.find(c=>c.name===name);
  if(!club) return;
  activeClub=club;
  document.getElementById('welcomePanel').style.display='none';
  const cdp=document.getElementById('cdPanel');
  cdp.classList.add('on');
  document.getElementById('cdName').textContent=displayName(club.name);
  document.getElementById('cdAward').innerHTML=awardBadge(club.name,false);

  // Modules
  document.getElementById('modList').innerHTML=club.modules.map((mod,i)=>{
    const r=i+1;
    const tag=r<=3?'<span class="mod-tag ts">Strength</span>':r<=6?'<span class="mod-tag tm">Mid-rank</span>':'<span class="mod-tag tg">Growth area</span>';
    return `<div class="mod-row">
      <div class="mod-num ${rnC(r)}">${r}</div>
      <div class="mod-name">${SHORT[mod]||mod}</div>
      ${tag}
      <div class="mod-bar"><div class="mod-bar-bg"><div class="mod-bar-fill" style="width:${bW(r)};background:${bC(r)}"></div></div></div>
    </div>`;
  }).join('');

  // Categories
  const cnC=['cn1','cn2','cn3','cn4'];
  const cnL=['1st — Top Category','2nd Category','3rd Category','4th Category'];
  document.getElementById('catGrid').innerHTML=club.cats.map((cat,i)=>`
    <div class="cat-card">
      <div class="cat-num ${cnC[i]}">${i+1}</div>
      <div class="cat-info">
        <div class="cat-name">${cat}</div>
        <div class="cat-lbl">${cnL[i]}</div>
      </div>
      <div class="cat-ico">${CAT_ICO[cat]||'◇'}</div>
    </div>`).join('');

  // Recs
  const recs=buildRecs(club);
  const tagCls={leverage:'rl',improve:'ri',focus:'rf'};
  const tagLbl={leverage:'↑ Leverage Strength',improve:'→ Build Momentum',focus:'⚑ Priority Focus'};
  document.getElementById('recList').innerHTML=recs.map(r=>`
    <div class="rec-card">
      <div class="rec-tag ${tagCls[r.t]}">${tagLbl[r.t]}</div>
      <div class="rec-title">${r.title}</div>
      <div class="rec-body">${r.body}</div>
    </div>`).join('');

  // Feedback
  const fbData = FEEDBACK[club.name] || {};
  const SHORT_MOD = {
    "Membership Recruitment and Engagement":"Membership & Engagement",
    "Community Service Projects":"Community Service",
    "Professional Development":"Professional Development",
    "Rotary Foundation":"Rotary Foundation",
    "Club Administration":"Club Administration",
    "Public Image":"Public Image",
    "Wellness":"Wellness",
    "International Service Projects":"International Service",
    "Fundraising":"Fundraising"
  };
  let fbHtml = '';
  // Render in module ranking order
  club.modules.forEach(mod => {
    const comments = fbData[mod];
    if(comments && comments.length){
      fbHtml += `<div class="fb-module-block">
        <div class="fb-mod-title">${SHORT_MOD[mod]||mod}</div>
        ${comments.map(c=>`<div class="fb-comment">${c}</div>`).join('')}
      </div>`;
    }
  });
  if(!fbHtml) fbHtml = '<div class="fb-none">No marker feedback recorded for this club.</div>';
  document.getElementById('fbSection').innerHTML = '<div class="sec-title">Markers\' Feedback</div>' + fbHtml;

  renderSidebar(document.getElementById('sbSearch').value);
  cdp.scrollTop=0;
  document.getElementById('mainPanel').scrollTop=0;
}

document.getElementById('sbSearch').addEventListener('input',e=>renderSidebar(e.target.value));
document.getElementById('clubList').addEventListener('click',e=>{
  const item=e.target.closest('.club-item');
  if(!item) return;
  const idx=parseInt(item.dataset.idx,10);
  if(!isNaN(idx)) selectClub(DATA[idx].name);
});
document.getElementById('filterRow').addEventListener('click',e=>{
  const p=e.target.closest('.fpill');
  if(!p) return;
  document.querySelectorAll('.fpill').forEach(x=>x.classList.remove('active'));
  p.classList.add('active');
  activeFilter=p.dataset.m;
  renderSidebar(document.getElementById('sbSearch').value);
});
renderSidebar();