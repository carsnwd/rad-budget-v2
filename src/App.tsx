import type { Component } from 'solid-js';
import { AnalysisPanel } from './components/views/panels/AnalysisPanel';
import { BudgetPanel } from './components/views/panels/BudgetPanel';
import { SpendingPanel } from './components/views/panels/SpendingPanel';

const App: Component = () => {
  return (
    <main class="max-w-5xl mx-auto text-text-color bg-primary-bg mt-16 overflow-hidden">
      <div class="grid grid-cols-2 gap-4">
        <BudgetPanel></BudgetPanel>
        <div class="grid grid-row-2 gap-4"><SpendingPanel></SpendingPanel><AnalysisPanel></AnalysisPanel></div>
      </div>
    </main>
  );
};

export default App;
