import React from 'react';
import { KUIConnect } from '@kleeen/core-react';
import { CardWidget } from '@kleeen/react/atomic-elements';

function CustomViewC33YX8XzrraJzqjAqianJt({ translate, ...widget }) {
  return (
    <CardWidget {...widget}>
      <div>
        <p>
          Open the code for <strong>Custom View 1</strong>'s Widget at
        </p>
        <cite style={{ color: 'var(--secondary-color)', overflowWrap: 'break-word' }}>
          apps/cloud/src/app/modules/custom/workflow-1/components/custom-view-c-33-y-x-8-xzrra-jzqj-aqian-jt.js
        </cite>
        <p>Update the content and save the file to see your changes.</p>
      </div>
    </CardWidget>
  );
}

export default KUIConnect(({ translate }) => ({ translate }))(CustomViewC33YX8XzrraJzqjAqianJt);
