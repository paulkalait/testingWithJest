import moxios from "moxios";
import { testStore } from "./../../utils";
import { fetchPosts } from "./../../src/actions";

describe("fetchPosts action", () => {
  beforeEach(() => {
    // * whenever we hit axios, it will be replaced with moxios before each test
    moxios.install();
  });

  afterEach(() => {
    moxios.uninstall();
  });

  test("redux store is updated correctly", () => {
    const expectedState = [
      {
        title: "Example",
        body: " Some Text",
      },
      {
        title: "Example 1",
        body: " Some Text 1",
      },
      {
        title: "Example 2",
        body: " Some Text 2",
      },
    ];
    const store = testStore();

    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 200,
        response: expectedState,
      });
    });

    return store.dispatch(fetchPosts()).then(() => {
      const newState = store.getState();
      expect(newState.posts).toBe(expectedState);
    });
  });
});
