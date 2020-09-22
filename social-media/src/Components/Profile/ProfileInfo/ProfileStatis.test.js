import React from "react";
import { create } from "react-test-renderer";
import ProfileStatusWithHooks from './ProfileStatusWithHooks';

describe("ProfileStatus Component", () => {
    test("status from props should be in the state", () => {
      const component = create(<ProfileStatusWithHooks status="Test status" />);
      const instance = component.getInstance();
      expect(instance.state.status).toBe("Test status");
    });
    
  });

