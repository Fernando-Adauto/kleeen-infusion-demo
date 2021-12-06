import { Attribute, WidgetScope } from '@kleeen/types';
import { useAvailableFiltersByWorkflow, useIsInvestigation } from '@kleeen/react/hooks';
import { useEffect, useState } from 'react';

import { ClickableChipsCellProps } from '../components/clickable-chips/clickable-chips-cell.model';
import { entityHasWidgets } from '@kleeen/widgets';
import { isNilOrEmpty } from '@kleeen/common/utils';
import { isFilterableAttribute, isLinkableByEntityType } from '@kleeen/frontend/utils';

interface InteractionValidations {
  hasCrossLinking: boolean;
  hasFilters: boolean;
  hasPreview: boolean;
}

type UseIsAttributeClickable = Pick<
  ClickableChipsCellProps,
  'attribute' | 'cellEntityType' | 'isIdTemporary'
> & {
  transformationKeyToUse?: string;
};

const defaultInteractionValidationsState = {
  hasCrossLinking: false,
  hasFilters: false,
  hasPreview: false,
};

export function useAttributeInteractions(props: UseIsAttributeClickable): InteractionValidations {
  const { attribute } = props;
  const [interactionValidations, setInteractionValidations] = useState<InteractionValidations>(
    defaultInteractionValidationsState,
  );
  const { availableFilters, hasFilters } = useAvailableFiltersByWorkflow<Attribute>([attribute]);
  const isInvestigationPage = useIsInvestigation();

  useEffect(() => {
    const shouldNotSetInteractionValidations = isNilOrEmpty(attribute);

    if (shouldNotSetInteractionValidations) return;

    const { hasFilter, isSingleCardinality } = isFilterableAttribute({
      hasFilters,
      filterableAttributes: availableFilters,
      attribute,
    });
    const scope = isSingleCardinality ? WidgetScope.Single : WidgetScope.Collection;
    const hasPreview = entityHasWidgets({
      entityId: attribute?.id,
      scope,
    });
    const linkableByEntityType = isLinkableByEntityType({
      attribute,
      isInvestigation: isInvestigationPage,
      entityType: props.cellEntityType,
    });
    const hasCrossLinking = !props.isIdTemporary && linkableByEntityType;

    setInteractionValidations({ hasCrossLinking, hasFilters: hasFilter, hasPreview });
  }, [attribute, isInvestigationPage, availableFilters.length]);

  return interactionValidations;
}
