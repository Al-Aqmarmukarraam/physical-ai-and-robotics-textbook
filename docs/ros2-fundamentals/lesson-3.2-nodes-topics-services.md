---
title: ROS 2 Nodes, Topics, and Services
description: Core communication concepts in ROS 2 with simple examples.
tags: [nodes, topics, services, communication]
---

# ROS 2 Nodes, Topics, and Services

## Introduction

The fundamental communication patterns in ROS 2 are built around nodes, topics, and services. Understanding these concepts is essential for developing ROS 2 applications.

## Core Concept

- **Nodes**: Basic computational units that perform robot functions
- **Topics**: Unidirectional, asynchronous communication channels (publish/subscribe model)
- **Services**: Bidirectional, synchronous communication (request/response model)

Nodes communicate with each other by publishing messages to topics or providing services that other nodes can call.

## Example

A robot navigation system might use:
- A sensor node that publishes laser scan data to the `/scan` topic
- A mapping node that subscribes to `/scan` and publishes maps to `/map`
- A path planning node that provides a service to calculate paths from start to goal positions
- A controller node that subscribes to planned paths and sends commands to the robot

## Key Takeaway

- Nodes are the basic processing units in ROS 2
- Topics enable asynchronous, one-to-many communication
- Services enable synchronous, one-to-one communication
- These patterns enable modular, distributed robot software design