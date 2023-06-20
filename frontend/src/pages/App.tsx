import React, { useState } from 'react';

export default function App() {
    const [tableData, setTableData] = useState<ContainerData[]>([]);
  
    const handleAddContainer = (containerData: ContainerData) => {
      setTableData([...tableData, containerData]);
    };
  
    // ...
  }
  
  interface ContainerData {
    name: string;
    image: string;
    usageTime: string;
    lastStarted: string;
  }
  