---
title: "Yongjae Choi: Intro to Game Lighting for Unreal Engine"
description: "Yongjae Choi's game course review"
pubDate: "2026-08-10"
updatedDate: "2026-08-10"
author: "Yongjae Choi"
slug: "lightingartist-yongjaechoi-us-review-260810"
heroImage: "https://cdn.day1company.io/prod/uploads/202307/073824-1093/us-lightingartist-yongjaechoi-us-og.jpg"
course_id: "212500"
instructor: "Yongjae Choi"
category: "game"
tags:
  - "game"
  - "Coloso"
  - "CourseReview"
---

## 🛠️ Key Skills & Details That Define Professional Quality

The ability to manipulate light isn't just about placing a source; it's about understanding how each parameter influences the final image. Professional lighting artists leverage these details to achieve specific moods and visual targets.

Consider the `Source Radius` on a point light. While it doesn't change the light's overall `Attenuation Range`, it dramatically alters the *quality* of the light it emits. A small `Source Radius` produces sharp, defined highlights and shadows, while a larger one softens these edges, creating a more natural, diffused look. This is particularly impactful when dealing with reflective surfaces, where the size of the specular highlight directly corresponds to the light source's perceived size.

When working with fog, the `Volumetric Scattering Intensity` parameter is crucial. It dictates how much light scatters within volumetric fog, essentially making the light beams visible. This effect is paramount for creating atmospheric conditions like haze, dust motes catching light, or the classic "god rays" seen in cinematic scenes. Properly tuned volumetric scattering can transform a simple scene into an immersive environment.

Furthermore, mastering the interplay between `Static`, `Stationary`, and `Movable` lights is key to optimization and artistic control. For instance, using `Static` lights for static environmental elements and `Movable` lights for dynamic objects or emphasis points allows for a balance between performance and visual fidelity. Even subtle controls like `Shadow Bias` or `Shadow Resolution Scale` can be the difference between jarring artifacts and seamless integration, demonstrating that professional quality often comes down to these fine-tuning adjustments.

---

## 💬 Frequently Asked Questions

**Q. How can a Lighting Artist ensure their static lights look good without excessive render times?**

A. The key is meticulous setup and optimization. This involves carefully crafting lightmap UVs for geometry and understanding how lightmap resolution affects shadow quality. While baking can take time, especially for high-quality results, it's efficient because the lighting is pre-calculated. For complex scenes, consider baking indirect light and using stationary or movable lights for dynamic elements that require interaction or change.

**Q. What is the biggest advantage of using Movable lights with Unreal Engine 5's Lumen for a Lighting Artist?**

A. The biggest advantage is achieving high-quality, real-time global illumination without the need for light baking. Lumen simulates how light bounces off surfaces and affects surrounding objects dynamically. This allows for much faster iteration and the creation of highly responsive and visually rich environments, especially beneficial for projects with dynamic time-of-day systems or interactive lighting scenarios.

**Q. When should a Lighting Artist prioritize using Stationary lights over Movable lights?**

A. Stationary lights offer a good balance between performance and flexibility for elements that don't move but might have their color or intensity changed during gameplay. They bake indirect lighting for efficiency but still allow some real-time adjustments. This is ideal for architectural visualizations or scenes where primary lighting needs to be performant but with some degree of runtime control, avoiding the higher performance cost of fully dynamic movable lights in less critical areas.

---

## 👉 Want to Go Deeper?

- **[See Yongjae Choi's Full Curriculum](https://coloso.global/en/products/lightingartist-yongjaechoi-us?utm_source=blog&utm_medium=organic&utm_campaign=pro_regular_lightingartist-yongjaechoi-us_auto_all&utm_content=game_lightingartist-yongjaechoi-us_gsd-autoblog-review-post-260810)**



<div class="coupon-section" data-coupon-type="50"></div>

