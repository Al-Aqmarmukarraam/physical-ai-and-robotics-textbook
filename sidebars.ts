import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */
const sidebars: SidebarsConfig = {
  // Manual sidebar configuration for the textbook
  textbookSidebar: [
    {
      type: 'category',
      label: 'Introduction',
      items: ['intro'],
    },
    {
      type: 'category',
      label: 'Chapter 1: Introduction to Physical AI',
      items: [
        'introduction/lesson-1.1-what-is-physical-ai',
        'introduction/lesson-1.2-history-ai-robotics',
        'introduction/lesson-1.3-components-physical-ai',
      ],
    },
    {
      type: 'category',
      label: 'Chapter 2: Basics of Humanoid Robotics',
      items: [
        'humanoid-robotics/lesson-2.1-anatomy-humanoid',
        'humanoid-robotics/lesson-2.2-kinematics-dynamics',
        'humanoid-robotics/lesson-2.3-control-architectures',
      ],
    },
    {
      type: 'category',
      label: 'Chapter 3: ROS 2 Fundamentals',
      items: [
        'ros2-fundamentals/lesson-3.1-introduction-ros2',
        'ros2-fundamentals/lesson-3.2-nodes-topics-services',
        'ros2-fundamentals/lesson-3.3-building-basic-packages',
      ],
    },
    {
      type: 'category',
      label: 'Chapter 4: Digital Twin Simulation',
      items: [
        'digital-twin-simulation/lesson-4.1-intro-digital-twins',
        'digital-twin-simulation/lesson-4.2-gazebo-simulation',
        'digital-twin-simulation/lesson-4.3-nvidia-isaac-sim',
      ],
    },
    {
      type: 'category',
      label: 'Chapter 5: Vision-Language-Action Systems',
      items: [
        'vision-language-action/lesson-5.1-robot-vision-essentials',
        'vision-language-action/lesson-5.2-nlu-for-robots',
        'vision-language-action/lesson-5.3-action-planning-execution',
      ],
    },
    {
      type: 'category',
      label: 'Chapter 6: Capstone: Simple AI-Robot Pipeline',
      items: [
        'capstone-pipeline/lesson-6.1-integrating-vla',
        'capstone-pipeline/lesson-6.2-basic-task-automation',
        'capstone-pipeline/lesson-6.3-testing-deployment',
      ],
    },
  ],
};

export default sidebars;
