import React from "react";
import styled from "styled-components";
import { dummyStaffs } from "../../utils/dummyData";
import { StaffCard } from "../Staffs/StaffCard";

const SidebarWrapper = styled.aside`
  width: 300px;
  padding: 1rem;
  border-left: 1px solid #e5e7eb;
  display: none;

  @media (min-width: 1024px) {
    display: block;
  }

  h2 {
    font-size: 0.875rem;
    font-weight: 600;
    margin-bottom: 0.75rem;
  }
    @media (max-width: 768px) {
    display:none;
  }
`;

const Section = styled.div`
  margin-bottom: 2rem;
`;

const StaffList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 1rem;
 

  li p {
    font-size: 0.875rem;
    line-height: 1.3;
  }

  li span {
    font-size: 0.75rem;
    color: #6b7280;
  }
`;

const TextButton = styled.button`
  font-size: 0.875rem;
  color: #059669;
  margin-top: 0.75rem;
  cursor: pointer;
  background: none;
  border: none;

  &:hover {
    text-decoration: underline;
  }
`;

const TopicTag = styled.span`
  display: inline-block;
  padding: 0.25rem 0.75rem;
  margin: 0.25rem;
  background: #f3f4f6;
  border-radius: 9999px;
  font-size: 0.875rem;
  cursor: pointer;

  &:hover {
    background: #e5e7eb;
  }
`;

const FollowList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  li {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  p {
    font-size: 0.875rem;
    margin: 0;
  }

  span {
    font-size: 0.75rem;
    color: #6b7280;
  }
`;

const FollowButton = styled.button`
  padding: 0.5rem 0.75rem;
  font-size: 0.75rem;
  border: 1px solid #d1d5db;
  border-radius: 25px;
  background: white;
  cursor: pointer;

  &:hover {
    background: #f9fafb;
  }
`;

const FooterLinks = styled.div`
  font-size: 0.75rem;
  color: #9ca3af;
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;

  span {
    cursor: pointer;

    &:hover {
      text-decoration: underline;
    }
  }
`;

const Sidebar = () => {
  return (
    <SidebarWrapper>

      <Section>
        <h2>Staff Picks</h2>
        <StaffList>
          {
            dummyStaffs.map((post) => <StaffCard key={post.id} post={post} />)
          }
        </StaffList>
        <TextButton>See the full list</TextButton>
      </Section>

      <Section>
        <h2>Recommended topics</h2>
        <div>
          {[
            "Data Science",
            "React",
            "Coding",
            "Mental Health",
            "UX",
            "Python",
            "Productivity",
          ].map((topic) => (
            <TopicTag key={topic}>{topic}</TopicTag>
          ))}
        </div>
        <TextButton>See more topics</TextButton>
      </Section>

      <Section>
        <h2>Who to follow</h2>
        <FollowList>
          <li>
            <div>
              <p>Dr. Derek Austin 🧠</p>
              <span>AI Contact Engineer - I teach LLMs to think…</span>
            </div>
            <FollowButton>Follow</FollowButton>
          </li>
          <li>
            <div>
              <p>ITNEXT Publication</p>
              <span>A platform for IT developers & software…</span>
            </div>
            <FollowButton>Follow</FollowButton>
          </li>
          <li>
            <div>
              <p>Oliver Foster</p>
              <span>Primarily proficient in the Java programming…</span>
            </div>
            <FollowButton>Follow</FollowButton>
          </li>
        </FollowList>
        <TextButton>See more suggestions</TextButton>
      </Section>

      <Section>
        <h2>Reading list</h2>
        <p style={{ fontSize: "0.75rem", color: "#6b7280" }}>
          Click the <strong>🔖</strong> on any story to easily add it to your
          reading list or a custom list that you can share.
        </p>
      </Section>

      {/* Footer */}
      <FooterLinks>
        {[
          "Help",
          "Status",
          "About",
          "Careers",
          "Press",
          "Blog",
          "Privacy",
          "Terms",
          "Text to speech",
        ].map((link) => (
          <span key={link}>{link}</span>
        ))}
      </FooterLinks>
    </SidebarWrapper>
  );
};

export default Sidebar;
