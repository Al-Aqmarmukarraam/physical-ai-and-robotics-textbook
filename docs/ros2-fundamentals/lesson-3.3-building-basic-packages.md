---
title: Building and Running Basic ROS 2 Packages
description: A hands-on introduction to creating and executing ROS 2 programs.
tags: [packages, building, running, development]
---

# Building and Running Basic ROS 2 Packages

## Introduction

ROS 2 packages are the basic building blocks of ROS 2 software. Understanding how to create, build, and run packages is fundamental to ROS 2 development.

## Core Concept

A ROS 2 package contains:

- **Source code**: Nodes, libraries, and other executable code
- **Configuration files**: Package.xml and CMakeLists.txt (or setup.py for Python)
- **Resource files**: Launch files, configuration files, and other assets

The typical workflow involves creating a package, writing code, building with colcon, and running nodes.

## Example

To create a simple publisher package:
1. Create package: `ros2 pkg create --build-type ament_python my_publisher`
2. Write a Python node that publishes messages
3. Build: `colcon build --packages-select my_publisher`
4. Source: `source install/setup.bash`
5. Run: `ros2 run my_publisher publisher_node`

## Key Takeaway

- Packages organize ROS 2 code into reusable components
- The build system (colcon) compiles and links packages
- Sourcing the setup file makes packages available for execution
- The package structure enables code reuse and sharing