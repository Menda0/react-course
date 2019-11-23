import React from "react";
import {create} from "react-test-renderer";
import TestRenderer from 'react-test-renderer';
import Job from "../components/Job";

const testJob = {
    "id": "023f89a1-f28d-408e-8ed5-89259c491c21",
    "type": "Full Time",
    "url": "https://jobs.github.com/positions/023f89a1-f28d-408e-8ed5-89259c491c21",
    "created_at": "Fri Nov 22 18:09:47 UTC 2019",
    "company": "Make School",
    "company_url": null,
    "location": "San Francisco",
    "title": "Senior Frontend Engineer (React / Apollo / GraphQL)",
    "description": "\u003cp\u003eWe're looking for a Senior Frontend Engineer to help design and build the applications and services to support the Make School platform.  We view software as the backbone of our classrooms and are working to digitize our entire curriculum to build a better learning experience and to allow instructors to focus on providing better in-person support to our students.  You'll be responsible for our Online Academy, student management system, portfolios, the marketing website, reporting, and other Make School frontend needs.\u003c/p\u003e\n\u003cp\u003eOur Stack:\u003c/p\u003e\n\u003cp\u003eReact, Apollo, Relay (legacy), GraphQL, ES6, Webpack, Jest, Cypress, Ruby on Rails (marketing site), jQuery (legacy)\u003c/p\u003e\n\u003cp\u003eOur Process:\u003c/p\u003e\n\u003cp\u003eWe are an agile team that follows a scrum methodology on Asana. We have stand-ups, sprint planning meetings,  retrospectives, and pair programming sessions. We connect regularly over Slack \u0026amp; Zoom and look forward to seeing your face there!\u003c/p\u003e\n\u003cp\u003eLocation:\u003c/p\u003e\n\u003cp\u003eThis position is based at our headquarters in San Francisco.\u003c/p\u003e\n\u003cp\u003eWhat You’ll Do:\u003c/p\u003e\n\u003cp\u003e-Play a key role in the continued architecture and implementation of the Make School educational platform\u003c/p\u003e\n\u003cp\u003e-Analyze and improve the efficiency and reliability of the Make School infrastructure\u003c/p\u003e\n\u003cp\u003e-Write code with best-practices (including TDD) and participate in peer code review\u003c/p\u003e\n\u003cp\u003e-Create the best user experience (for internal \u0026amp; external users)\u003c/p\u003e\n\u003cp\u003eWhat We’re Looking For:\u003c/p\u003e\n\u003cp\u003e-4+ years of strong development experience in our stack, especially React/Apollo/GraphQL\u003c/p\u003e\n\u003cp\u003e-Debugging, quality-assurance and performance analysis experience\u003c/p\u003e\n\u003cp\u003e-Ability to work well with both in-person and remote peers\u003c/p\u003e\n\u003cp\u003e-Strong unit and end to end testing experience and ES6 best practices\u003c/p\u003e\n\u003cp\u003e-Ability to accurately set timelines and to clearly define specifications\u003c/p\u003e\n\u003cp\u003e-Ability to work efficiently and manage trade-offs when faced with conflicting deadlines\u003c/p\u003e\n\u003cp\u003e-Ability to clearly communicate thought process\u003c/p\u003e\n\u003cp\u003e-Ability and confidence to take ownership of projects\u003c/p\u003e\n\u003cp\u003e-A strong understanding of visual design and user experience principles\u003c/p\u003e\n\u003cp\u003e-Passion for education\u003c/p\u003e\n\u003cp\u003e-Bonus points for experience with Ruby on Rails \u0026amp; GraphQL experience in production environments\u003c/p\u003e\n\u003cp\u003e-Bonus points for knowledge of JS tooling and configuration\u003c/p\u003e\n\u003cp\u003eAbout Make School:\u003c/p\u003e\n\u003cp\u003eMake School is redesigning college for the 21st century. Our education combines liberal arts, computer science, software development, and character development with a strong emphasis on fully preparing students for successful careers as software engineers, product managers, or entrepreneurs. Our alumni work at Facebook, Google, Apple, Snap, LinkedIn, Lyft and more.\u003c/p\u003e\n\u003cp\u003eOur college is accessible to students of all backgrounds, 40% are underrepresented minority students and 50% come from low-income families. Students pay tuition as a percentage of earnings once they are employed, directly aligning their incentives with ours. Make School is funded by Learn Capital, Y Combinator, Mitch Kapor, Alexis Ohanian, Tim Draper, and others.\u003c/p\u003e\n\u003cp\u003eNeed more reasons on why we love engineers:\u003c/p\u003e\n\u003cp\u003emake.sc/5-reasons-to-join-our-team\u003c/p\u003e\n\u003cp\u003eA few of our awesome benefits:\u003c/p\u003e\n\u003cblockquote\u003e\n\u003cp\u003eEmployer-paid health, dental and vision insurance\nUnlimited PTO\nOpportunity to work from home\nCatered lunches every Wednesday\nProfessional development funds\nCommuter benefits\nAnd more!\u003c/p\u003e\n\u003c/blockquote\u003e\n\u003cp\u003eWe are an equal opportunity employer and value diversity at our company. We do not discriminate on the basis of race, religion, color, national origin, gender, sexual orientation, age, marital status, veteran status, or disability status.\u003c/p\u003e\n",
    "how_to_apply": "\u003cp\u003e\u003ca href=\"https://jobs.lever.co/makeschool/1edb94b9-0757-4f2f-a0bb-9cb795778699/apply\"\u003ehttps://jobs.lever.co/makeschool/1edb94b9-0757-4f2f-a0bb-9cb795778699/apply\u003c/a\u003e\u003c/p\u003e\n",
    "company_logo": "https://jobs.github.com/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBa0Y0IiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--ab76c4473e80a702772e7b1e1dc525a5fdeb2d05/sig.jpeg"
};

describe("Job component", () => {
    test("Matches the snapshot", () => {
        const job = TestRenderer.create(<Job job={testJob}/>);
        expect(job.toJSON()).toMatchSnapshot();
    });

    test("Check of props is write", () => {
        const component = TestRenderer.create(<Job job={testJob}/>);
        const instance = component.root;
        expect(instance.findByType(Job).props.job).toBe(testJob);
    });
});
