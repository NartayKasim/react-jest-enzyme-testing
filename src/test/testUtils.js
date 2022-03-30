import checkPropTypes from "check-prop-types";

export const findByTestAttribute = (wrapper, val) => {
   return wrapper.find(`[data-test="${val}"]`);
};

export const checkProps = (component, conformingProps) => {
   const propError = checkPropTypes(
      component.propTypes,
      conformingProps,
      "prop",
      component.name
   );
   return expect(propError).toBeUndefined();
};
