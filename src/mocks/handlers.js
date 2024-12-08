import { rest } from "msw";

const baseURL = "https://drf-api-dp-e6ac617a981a.herokuapp.com/";

export const handlers = [
  rest.get("${baseURL}dj-rest-aurh/user/", (req, res, ctx) => {
    return res(
      ctx.json({
        pk: 2,
        username: "zach",
        email: "",
        first_name: "",
        last_name: "",
        profile_id: 2,
        profile_image:
          "https://res.cloudinary.com/dekfnzr2m/image/upload/v1/media/../default_profile_ov49xh",
      })
    );
  }),
  rest.post('${baseURL}dj-rest-auth/logout/', (req,res,ctx) => {
    return res(ctx.status(200));
  })
];
